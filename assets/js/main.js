// Main JavaScript for Cerner mPage Components Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Component Card Hover Effects
    const componentCards = document.querySelectorAll('.component-card, .example-card, .doc-card');
    componentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Lazy Loading for iframes
    const iframes = document.querySelectorAll('iframe[data-src]');
    const iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.dataset.src;
                iframe.removeAttribute('data-src');
                iframeObserver.unobserve(iframe);
            }
        });
    });
    
    iframes.forEach(iframe => {
        iframeObserver.observe(iframe);
    });
    
    // Search Functionality (if implemented)
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const cards = document.querySelectorAll('.component-card, .example-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Component Demo Initialization
    initializeComponentDemos();
});

// Component Demo Functions
function initializeComponentDemos() {
    // Initialize workflow components
    initializeWorkflowDemos();
    
    // Initialize alert components
    initializeAlertDemos();
    
    // Initialize report components
    initializeReportDemos();
}

function initializeWorkflowDemos() {
    const workflowContainers = document.querySelectorAll('.workflow-demo');
    
    workflowContainers.forEach(container => {
        const steps = container.querySelectorAll('.workflow-step');
        const nextBtn = container.querySelector('.workflow-next');
        const prevBtn = container.querySelector('.workflow-prev');
        let currentStep = 0;
        
        function updateWorkflowStep(stepIndex) {
            steps.forEach((step, index) => {
                step.classList.remove('active', 'completed');
                if (index < stepIndex) {
                    step.classList.add('completed');
                } else if (index === stepIndex) {
                    step.classList.add('active');
                }
            });
            
            // Update button states
            if (prevBtn) {
                prevBtn.disabled = stepIndex === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = stepIndex === steps.length - 1;
            }
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateWorkflowStep(currentStep);
                }
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentStep > 0) {
                    currentStep--;
                    updateWorkflowStep(currentStep);
                }
            });
        }
        
        // Initialize first step
        updateWorkflowStep(0);
    });
}

function initializeAlertDemos() {
    const alertContainers = document.querySelectorAll('.alert-demo');
    
    alertContainers.forEach(container => {
        const showAlertBtn = container.querySelector('.show-alert-btn');
        const alertType = container.dataset.alertType || 'info';
        
        if (showAlertBtn) {
            showAlertBtn.addEventListener('click', function() {
                showAlert(alertType, 'This is a demo alert message!');
            });
        }
    });
}

function showAlert(type, message) {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type}`;
    alertContainer.innerHTML = `
        <div class="alert-icon">
            <i class="fas fa-${getAlertIcon(type)}"></i>
        </div>
        <div class="alert-content">
            <div class="alert-title">${getAlertTitle(type)}</div>
            <div class="alert-message">${message}</div>
        </div>
        <button class="alert-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add close button styles
    const closeBtn = alertContainer.querySelector('.alert-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 5px;
        margin-left: auto;
    `;
    
    document.body.appendChild(alertContainer);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (alertContainer.parentElement) {
            alertContainer.remove();
        }
    }, 5000);
}

function getAlertIcon(type) {
    const icons = {
        success: 'check-circle',
        warning: 'exclamation-triangle',
        danger: 'times-circle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getAlertTitle(type) {
    const titles = {
        success: 'Success',
        warning: 'Warning',
        danger: 'Error',
        info: 'Information'
    };
    return titles[type] || 'Information';
}

function initializeReportDemos() {
    const reportContainers = document.querySelectorAll('.report-demo');
    
    reportContainers.forEach(container => {
        const exportBtn = container.querySelector('.export-btn');
        const printBtn = container.querySelector('.print-btn');
        
        if (exportBtn) {
            exportBtn.addEventListener('click', function() {
                exportReport(container);
            });
        }
        
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                printReport(container);
            });
        }
    });
}

function exportReport(container) {
    // Simulate export functionality
    const reportTitle = container.querySelector('.report-title').textContent;
    alert(`Exporting "${reportTitle}"...\n\nThis would typically download a PDF or Excel file.`);
}

function printReport(container) {
    // Simulate print functionality
    const reportTitle = container.querySelector('.report-title').textContent;
    alert(`Printing "${reportTitle}"...\n\nThis would open the print dialog.`);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for use in component demos
window.CernerComponents = {
    showAlert,
    exportReport,
    printReport,
    debounce,
    throttle
};
