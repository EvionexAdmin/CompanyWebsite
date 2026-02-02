/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'grid-flow': 'grid-flow 20s linear infinite',
                'shine': 'shine 4s infinite',
                'pulse-slow': 'pulseSlow 8s infinite ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    'from': { opacity: '0', transform: 'translateY(10px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' }
                },
                slideUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' }
                },
                pulseSlow: {
                    '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
                    '50%': { opacity: '0.3', transform: 'scale(1.05)' }
                },
                'grid-flow': {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(0)' }
                },
                shine: {
                    '0%': { left: '-100%' },
                    '100%': { left: '200%' }
                }
            }
        }
    },
    plugins: [],
}
