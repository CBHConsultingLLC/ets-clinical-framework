/**
 * ets-client-cclHelper.js — minimalist XMLCclRequest helper for Cerner (Edge)
 * Usage:
 *   const { data } = await callCcl({ program: "eks_get_win32_components", params: ["MINE", 57, 0, "mpObj", "GETCODESET"] });
 *   // If your CCL returns JSON, it will be parsed automatically; otherwise `data` is raw text.
 */

/** Map CCL/Platform status codes to short text */
const STATUS_TEXT = new Map([
  [200, "Success"],
  [405, "Method Not Allowed"],
  [409, "Invalid State"],
  [492, "Non-Fatal Error"],
  [493, "Memory Error"],
  [500, "Internal Server Exception"],
]);

/** Safely serialize a single parameter for XMLCclRequest.
 *  - Strings are wrapped in double quotes with internal quotes doubled (CCL convention).
 *  - Numbers pass through.
 *  - Booleans become 1/0 (common pattern).
 *  - Objects/arrays become JSON, then quoted.
 *  - null/undefined => empty quoted string "".
 */
function toParam(value) {
  if (value === null || value === undefined) return '""';
  const t = typeof value;
  if (t === "number") return String(value);
  if (t === "boolean") return value ? "1" : "0";
  if (t === "string") return `"${value.replace(/"/g, '""')}"`;
  // objects/arrays: JSON then CCL-quote
  const json = JSON.stringify(value);
  return `"${json.replace(/"/g, '""')}"`;
}

/** Build the comma-delimited parameter string expected by XMLCclRequest.send */
function serializeParams(params = []) {
  return params.map(toParam).join(",");
}

/**
 * Core call helper.
 * @param {Object} options
 * @param {string} options.program  - CCL program name (e.g., "my_program")
 * @param {Array}  options.params   - Positional params (will be serialized/quoted)
 * @param {string} [options.method] - "GET" or "POST" (defaults to "GET")
 * @param {number} [options.timeoutMs] - Reject if not completed in time (default 15000)
 * @param {boolean}[options.tryJson] - Try JSON.parse on responseText (default true)
 * @param {boolean}[options.useBlob] - Use setBlobIn(paramString) instead of send(paramsString). Requires CCL support. Default false.
 * @returns {Promise<{ok:boolean,status:number,statusText:string,raw:string,data:any,durationMs:number}>}
 */
export function callCcl({
  program,
  params = [],
  method = "GET",
  timeoutMs = 15000,
  tryJson = true,
  useBlob = false,
} = {}) {
  if (!program) throw new Error("callCcl: 'program' is required");

  return new Promise((resolve, reject) => {
    const xcr = new XMLCclRequest();
    const started = performance.now();
    let settled = false;

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      // Edge only supports async XMLCclRequest; we can’t truly abort, so we detach handler.
      try { xcr.onreadystatechange = null; } catch {}
      reject(new Error(`XMLCclRequest timeout after ${timeoutMs}ms for ${program}`));
    }, timeoutMs);

    xcr.onreadystatechange = function () {
      if (xcr.readyState !== 4 || settled) return;
      settled = true;
      clearTimeout(timer);

      const status = Number(xcr.status) || 0;
      const raw = xcr.responseText || "";
      const statusText = STATUS_TEXT.get(status) || (xcr.statusText || "Unknown");
      const ok = status === 200 || status === 492; // treat Non-Fatal as success but surface status

      let data = raw;
      if (tryJson && raw) {
        try { data = JSON.parse(raw); } catch { /* leave as text */ }
      }

      const result = {
        ok,
        status,
        statusText,
        raw,
        data,
        durationMs: Math.round(performance.now() - started),
      };

      if (ok) resolve(result);
      else reject(Object.assign(new Error(`CCL "${program}" failed: ${status} ${statusText}`), result));
    };

    xcr.open(method, program, true);

    const paramString = serializeParams(params);

    // By default we use send(paramString).
    // If you expect >65,535 characters, set useBlob:true AND update your CCL to read the request blob.
    if (useBlob) {
      xcr.setBlobIn(paramString);
      xcr.send("");
    } else {
      xcr.send(paramString);
    }
  });
}

/* ---------- Convenience helpers you’ll likely reuse ---------- */

/** Build a tiny wrapper for a specific CCL program so you don’t repeat yourself. */
export function bindProgram(program, baseParams = []) {
  return (moreParams = [], opts = {}) =>
    callCcl({ program, params: [...baseParams, ...moreParams], ...opts });
}

/** Turn common clinical identifiers into a canonical prefix (site/pid/eid/uid). */
export function makeCommonParams({ site = "MINE", pid, eid, uid }) {
  return [site, pid, eid, uid];
}
