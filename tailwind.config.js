/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                'satoshi': ['Satoshi', 'sans-serif'],
            },
            colors: {
                'electric-indigo': {
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#3730a3',
                },
                'deep-space': {
                    900: '#0c0c0c',
                    800: '#1a1a1a',
                    700: '#2d2d2d',
                },
                'flow-purple': {
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                },
                'flow-blue': {
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'wave': 'wave 8s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 3s infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'zoom-in': 'zoomIn 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                wave: {
                    '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
                    '25%': { transform: 'translateX(20px) rotate(1deg)' },
                    '50%': { transform: 'translateX(-10px) rotate(-1deg)' },
                    '75%': { transform: 'translateX(15px) rotate(0.5deg)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                zoomIn: {
                    '0%': { opacity: '0', transform: 'scale(0.9)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
            backdropBlur: {
                'xs': '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
                'glow-lg': '0 0 40px rgba(139, 92, 246, 0.4)',
                'flow': '0 8px 32px rgba(139, 92, 246, 0.2)',
            },
        },
    },
    plugins: [],
}
