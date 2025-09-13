# Clinical UI Components

A comprehensive collection of reusable UI components designed for clinical applications, built with modern web technologies and healthcare-focused design patterns.

## Overview

This component library provides a complete set of UI building blocks that can be used across clinical applications. The components are designed to be:

- **Responsive**: Work seamlessly across all device sizes
- **Accessible**: Built with WCAG 2.1 compliance in mind
- **Customizable**: Easy to modify colors, fonts, and styling
- **Framework Ready**: Works with jQuery, Bootstrap 5, and Tabulator

## Components

### 1. Header Component (`batcat-header.html`)
- Responsive navigation with branding
- User actions and notifications
- Mobile-friendly hamburger menu
- Bootstrap 5 integration

**Features:**
- Customizable logo and brand colors
- Dropdown navigation menus
- User profile and settings
- Notification badges
- Search functionality

### 2. Footer Component (`batcat-footer.html`)
- Multi-column layout
- Social media links
- Legal and compliance sections
- Brand integration

**Features:**
- Organized link sections
- Social media integration
- Copyright and version information
- Responsive design

### 3. Table Component (`batcat-table.html`)
- Advanced data table with Tabulator integration
- Sorting, filtering, and pagination
- Search functionality
- Action buttons and status indicators

**Features:**
- Real-time search and filtering
- Customizable column layouts
- Row selection and actions
- Export functionality
- Responsive design

### 4. Input Components (`batcat-inputs.html`)
- Comprehensive form inputs
- Validation states and error handling
- Multiple input types
- Accessibility features

**Features:**
- Text inputs with icons
- Select dropdowns
- Checkboxes and radio buttons
- Textarea and toggle switches
- Form validation
- Help text and error messages

### 5. Media Components (`batcat-media.html`)
- Image galleries with hover effects
- Video player with custom controls
- Interactive charts using Chart.js
- Loading states and placeholders

**Features:**
- Medical image display
- Video playback controls
- Data visualization charts
- Loading indicators
- Responsive media handling

### 6. Rich Text Editor (`batcat-rich-text.html`)
- Full-featured rich text editor
- Clinical note templates
- Table and link insertion
- Character counting

**Features:**
- Formatting toolbar
- Clinical templates
- Table insertion
- Link management
- Undo/redo functionality
- Character counting

## Framework Integration

### jQuery
All components use jQuery for DOM manipulation and event handling. Include jQuery before using any components:

```html
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
```

### Bootstrap 5
Components leverage Bootstrap 5's grid system and utility classes:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Tabulator
Advanced table functionality is provided by Tabulator:

```html
<link href="https://unpkg.com/tabulator-tables@5.5.2/dist/css/tabulator_bootstrap5.min.css" rel="stylesheet">
<script src="https://unpkg.com/tabulator-tables@5.5.2/dist/js/tabulator.min.js"></script>
```

### Chart.js
Data visualization is powered by Chart.js:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

## Usage

### Basic Implementation

1. Include the required CSS and JavaScript files
2. Copy the HTML structure from the component examples
3. Customize the styling and content as needed
4. Add any required JavaScript functionality

### Example: Header Component

```html
<header class="batcat-header">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <i class="fas fa-hospital me-2"></i>
                    Your Brand
                </a>
                <!-- Navigation content -->
            </div>
        </nav>
    </div>
</header>
```

### Example: Table Component

```html
<div class="batcat-table-container">
    <div class="batcat-table-header">
        <h3 class="batcat-table-title">Data Table</h3>
        <!-- Search and filters -->
    </div>
    <div id="batcat-table"></div>
    <div class="batcat-table-pagination">
        <!-- Pagination controls -->
    </div>
</div>
```

## Customization

### Colors
Modify the CSS variables to match your brand colors:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #6b7280;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;
}
```

### Typography
Update font families and sizes:

```css
.batcat-component {
    font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
}
```

### Spacing
Adjust padding and margins:

```css
.batcat-component {
    padding: 1rem;
    margin-bottom: 1.5rem;
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast support
- Focus management

## Contributing

When adding new components or modifying existing ones:

1. Follow the established naming conventions
2. Include comprehensive documentation
3. Test across different browsers
4. Ensure accessibility compliance
5. Update this README with new components

## License

This component library is free to use for clinical applications. No attribution required.

## Support

For questions or issues with the components, please refer to the individual component documentation or create an issue in the main repository.
