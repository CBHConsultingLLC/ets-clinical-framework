# Cerner mPage Components

A comprehensive collection of reusable, production-ready components for Cerner PowerChart mPages. This repository serves as both a development toolkit and a professional portfolio showcasing healthcare application development expertise.

## 🏥 Overview

This repository contains professionally designed and implemented components for various types of Cerner mPages, including:

- **Full Page mPages** - Complete page implementations with navigation and data display
- **Workflow mPages** - Step-by-step workflow components for clinical processes
- **Worklist mPages** - Data listing and management components with filtering
- **Summary mPages** - Dashboard and summary view components
- **Alert Components** - Notification and alert systems
- **Report Components** - Report generation and display systems
- **Clinical UI Components** - Reusable UI components for headers, footers, tables, inputs, media, and rich text editing

## 🚀 Key Features

- **Production Ready** - Battle-tested components with comprehensive error handling
- **Responsive Design** - Works seamlessly across all device sizes
- **Accessibility Compliant** - WCAG 2.1 AA compliant for healthcare environments
- **Modular Architecture** - Easy to customize and integrate
- **Comprehensive Documentation** - Detailed guides and examples
- **Professional Portfolio** - Showcase your healthcare development skills

## 📁 Repository Structure

```
Cerner-mPage-Components/
├── index.html                 # Main portfolio page
├── README.md                  # This file
├── assets/                    # Static assets
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   └── components.css    # Component-specific styles
│   └── js/
│       └── main.js           # Main JavaScript functionality
├── components/                # Component implementations
│   ├── full-pages/           # Full page mPage components
│   ├── workflows/            # Workflow mPage components
│   ├── worklists/            # Worklist mPage components
│   ├── summaries/            # Summary mPage components
│   ├── alerts/               # Alert components
│   ├── reports/              # Report components
│   └── terra-ui/             # Clinical UI components
├── examples/                  # Live examples and demos
├── docs/                      # Documentation
└── .github/                   # GitHub configuration
    └── workflows/
        └── deploy.yml        # GitHub Pages deployment
```

## 🛠️ Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cerner-mpage-components.git
   cd cerner-mpage-components
   ```

2. **Start a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   Navigate to `http://localhost:8000` to view the portfolio

### Quick Start

1. Browse the component categories on the main page
2. Click on any component to view detailed examples
3. Use the live examples to understand implementation
4. Copy component code for your own projects
5. Customize styles and functionality as needed

## 📚 Component Categories

### Full Page mPages
Complete page implementations with comprehensive layouts:
- Patient Summary Dashboard
- Clinical Overview Pages
- Data Entry Forms
- Navigation Components

### Workflow mPages
Step-by-step process components:
- Medication Administration Workflow
- Patient Admission Process
- Clinical Assessment Workflows
- Quality Assurance Checklists

### Worklist mPages
Data management and listing components:
- Patient Lists with Filtering
- Medication Lists
- Task Management Lists
- Search and Sort Functionality

### Summary mPages
Dashboard and overview components:
- Clinical Dashboards
- Performance Metrics
- Key Performance Indicators
- Real-time Data Visualization

### Alert Components
Notification and messaging systems:
- Critical Alerts
- Warning Notifications
- Information Messages
- Success Confirmations

### Report Components
Report generation and display:
- Clinical Reports
- Performance Reports
- Data Export Functionality
- Print-ready Formats

## 🎨 Customization

### Styling
All components use CSS custom properties for easy theming:

```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #1e3a5f;
    --accent-color: #4a90e2;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --info-color: #17a2b8;
}
```

### Component Integration
Components are designed to be easily integrated into existing Cerner mPage projects:

```html
<!-- Include the main stylesheet -->
<link rel="stylesheet" href="assets/css/main.css">
<link rel="stylesheet" href="assets/css/components.css">

<!-- Use component classes -->
<div class="mpage-component">
    <div class="workflow-container">
        <!-- Your workflow content -->
    </div>
</div>
```

## 📖 Documentation

- [Getting Started Guide](docs/getting-started.html)
- [API Reference](docs/api-reference.html)
- [Styling Guide](docs/styling-guide.html)
- [Component Examples](examples/)

## 🚀 Deployment

### GitHub Pages
This repository is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io/cerner-mpage-components`

### Homelab Deployment
For homelab deployment:

1. Clone the repository to your web server
2. Configure your web server to serve the files
3. Set up SSL certificates for HTTPS
4. Configure domain name and DNS

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and patterns
- Add comprehensive comments for complex functionality
- Update documentation for new features
- Test across different browsers and devices
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🧩 Clinical UI Components

The Clinical UI Components section provides a comprehensive set of reusable UI building blocks:

### Available Components
- **Header Component** - Responsive navigation with branding and user actions
- **Footer Component** - Multi-column footer with links and social media
- **Table Component** - Advanced data table with Tabulator integration
- **Input Components** - Complete form input library with validation
- **Media Components** - Image galleries, video players, and charts
- **Rich Text Editor** - Full-featured editor with clinical templates

### Framework Integration
- **jQuery** - DOM manipulation and event handling
- **Bootstrap 5** - Responsive grid system and utilities
- **Tabulator** - Advanced table functionality
- **Chart.js** - Data visualization capabilities

### Key Features
- **1:1 Terra-UI Compatibility** - Maintains design consistency with Cerner's design system
- **Free Use** - No licensing restrictions for your organization
- **Customizable** - Easy to modify colors, fonts, and styling
- **Responsive** - Works across all device sizes
- **Accessible** - WCAG 2.1 compliant

## 🏆 Portfolio Use

This repository serves as a professional portfolio demonstrating:

- **Healthcare IT Expertise** - Deep understanding of clinical workflows
- **UI/UX Design Skills** - User-centered design for healthcare professionals
- **Technical Proficiency** - Modern web technologies and best practices
- **System Integration** - Cerner PowerChart mPage development
- **Quality Assurance** - Production-ready, tested components
- **Component Library Development** - Comprehensive UI component system

## 📞 Support

For questions, suggestions, or support:

- Create an [Issue](https://github.com/yourusername/cerner-mpage-components/issues)
- Contact: [your-email@example.com]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Cerner Corporation for PowerChart platform
- Healthcare professionals who provided feedback
- Open source community for inspiration and tools

---

**Built with ❤️ for healthcare professionals**
