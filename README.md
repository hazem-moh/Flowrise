# FlawRaise - High-Converting Funnel Landing Page

FlawRaise is a modern, responsive landing page designed for businesses offering high-converting sales funnel services. Built with React and enhanced with stunning animations, this project showcases a professional, conversion-optimized design perfect for coaches, consultants, and digital entrepreneurs.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices from mobile to desktop
- **Smooth Animations** - Powered by Framer Motion for engaging user interactions
- **Modern UI/UX** - Clean, professional design with gradient effects and glassmorphism
- **Performance Optimized** - Fast loading with Vite build system
- **SEO Ready** - Structured for search engine optimization
- **Conversion Focused** - Strategically designed to maximize lead generation

## 🎯 Sections Included

1. **Hero Section** - Compelling headline with animated orbital tool showcase
2. **Who We Help** - Target audience profiles with interactive cards
3. **What We Do** - Service offerings and value propositions
4. **Why Funnels Fail** - Problem identification and solution presentation
5. **How It Works** - 4-step process visualization
6. **Testimonials** - Social proof and success stories
7. **Guarantee** - Trust-building elements
8. **Final CTA** - Call-to-action for lead capture

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Next-generation frontend build tool
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & Design

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.11** - Vite integration for Tailwind CSS
- **Custom CSS Variables** - Brand-specific color system
- **Responsive Design** - Mobile-first approach
- **Glassmorphism Effects** - Modern UI aesthetics

### Animations & Interactions

- **Framer Motion 12.23.12** - Production-ready motion library for React
- **Lucide React 0.534.0** - Beautiful & consistent icon library
- **Custom Animations** - Orbital animations, hover effects, scroll triggers

### Routing & Navigation

- **React Router DOM 7.7.1** - Declarative routing for React applications

### Development Tools

- **ESLint 9.30.1** - Code linting and quality assurance
- **@eslint/js 9.30.1** - ESLint JavaScript configuration
- **eslint-plugin-react-hooks 5.2.0** - ESLint rules for React Hooks
- **eslint-plugin-react-refresh 0.4.20** - ESLint plugin for React Fast Refresh
- **globals 16.3.0** - Global variables for ESLint

### Build & Development

- **@vitejs/plugin-react 4.6.0** - Official Vite plugin for React
- **@types/react 19.1.8** - TypeScript definitions for React
- **@types/react-dom 19.1.6** - TypeScript definitions for React DOM

## 📦 Complete Dependencies List

### Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.11",
  "framer-motion": "^12.23.12",
  "lucide-react": "^0.534.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.7.1",
  "tailwindcss": "^4.1.11"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.30.1",
  "@types/react": "^19.1.8",
  "@types/react-dom": "^19.1.6",
  "@vitejs/plugin-react": "^4.6.0",
  "eslint": "^9.30.1",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.3.0",
  "vite": "^7.0.4"
}
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd flawraise
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
flawraise/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── FinalCTASection.jsx
│   │   ├── GuaranteeSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HowItWorksSection.jsx
│   │   ├── Navigation.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── WhatWeDoSection.jsx
│   │   ├── WhoWeHelpSection.jsx
│   │   └── WhyFunnelsFailSection.jsx
│   ├── pages/
│   │   ├── BookingPage.jsx
│   │   ├── LeadMagnetPage.jsx
│   │   └── ThankYouPage.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── AppRouter.jsx
│   ├── main.jsx
│   └── index.css
├── eslint.config.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Brand Colors

The project uses a custom color system defined in `src/index.css`:

- **Primary Blue**: `--color-flowrise-blue-*` (50-900 scale)
- **Accent Green**: `--color-flowrise-green-*` (50-900 scale)
- **Navy**: `--color-flowrise-navy-*` (50-900 scale)

### Responsive Breakpoints

- **Mobile**: 0-640px
- **Tablet**: 641px-768px
- **Desktop**: 769px+
- **Large Desktop**: 1024px+
- **Extra Large**: 1280px+

### Animation System

All animations are built with Framer Motion and include:

- Entrance animations (fade, slide, scale)
- Hover effects and micro-interactions
- Scroll-triggered animations
- Orbital rotation systems

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deployment Options

- **Vercel** - Recommended for React applications
- **Netlify** - Simple drag-and-drop deployment
- **GitHub Pages** - Free hosting for static sites
- **AWS S3** - Scalable cloud hosting

## 📱 Mobile Optimization

- Touch-friendly button sizes (min 44px)
- Optimized animations for mobile performance
- Responsive typography scaling
- Reduced motion support for accessibility
- Mobile-first CSS approach

## 🔧 Performance Features

- **Code Splitting** - Automatic code splitting with Vite
- **Tree Shaking** - Unused code elimination
- **Image Optimization** - Responsive images and lazy loading
- **CSS Optimization** - Tailwind CSS purging
- **Hot Module Replacement** - Fast development experience

## 🎯 SEO Optimization

- Semantic HTML structure
- Meta tags ready for customization
- Structured data markup
- Fast loading times
- Mobile-friendly design
- Accessibility best practices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Usage Ideas

This landing page template is perfect for:

- **Funnel Agencies** - Showcase your funnel building services
- **Digital Marketing Consultants** - Present your expertise
- **Course Creators** - Promote high-ticket coaching programs
- **SaaS Companies** - Market your software solutions
- **Service Providers** - Any high-value service business

## 🎨 Design Credits

- **Color Palette**: Custom FlawRaise brand colors
- **Icons**: Lucide React icon library
- **Animations**: Custom Framer Motion implementations
- **Typography**: Inter font family from Google Fonts

---

Built with ❤️ using React, Vite, and Tailwind CSS
