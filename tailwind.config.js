/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                'cherryBomb': ['Cherry Bomb One', 'cursive'],
                'karla':['Karla', 'sans-serif'],
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit,minmax(100px,1fr))'
            },
            height: {
                '128': '32rem',
                '192':'48rem',
                '196':'52rem',
                
            },
            backgroundColor: {
                'primary-1':'#ccc',
                'primary-2':'#ddd',
                'primary-3':'#eee',
                'secondary-1':'#ccc',
                'secondary-2':'#ddd',
                'secondary-3':'#eee',       
            },
            textColor: {
                'primary-1':'#ccc',
                'primary-2':'#ddd',
                'primary-3':'#eee',
                'secondary-1':'#ccc',
                'secondary-2':'#ddd',
                'secondary-3':'#eee',
            },
            keyframes: {
                moveAndSpin1: {
                    "0%": {
                        top:"46px",
                        transform: "rotate(0)"
                    },
                    "25%": {
                        top: "34px",
                        transform: "rotate(0)"
                    },
                    "100%": { 
                        top:"34px",
                        transform: "rotate(-45deg)"
                    }
                },
                moveAndSpin2: {
                    "0%": {
                        top:"22px",
                        transform: "rotate(0)"
                    },
                    "25%": {
                        top: "34px",
                        transform: "rotate(0)"
                    },
                    "100%": { 
                        top:"34px",
                        transform: "rotate(45deg)"
                    }
                },
                moveAndSpin3: {
                    "0%": {
                        top:"34px",
                        transform: "rotate(-45deg)"
                        
                    },
                    "25%": {
                        top: "34px",
                        transform: "rotate(0)"
                    },
                    "100%": { 
                        top:"46px",
                        transform: "rotate(0)"
                    }
                },
                moveAndSpin4: {
                    "0%": {
                        top:"34px",
                        transform: "rotate(45deg)" 
                    },
                    "25%": {
                        top: "34px",
                        transform: "rotate(0)"
                    },
                    "100%": { 
                        top:"22px",
                        transform: "rotate(0)"
                    }
                },
                disappear: {
                    "0%": { opacity: "100%"},
                    "100%": {opacity: "0"}
                },
                appear: {
                    "0%": { opacity: "0"},
                    "100%": {opacity: "100%"}
                }
            },
            animation: {
                moveAndSpin1: "moveAndSpin1 1300ms linear forwards",
                moveAndSpin2: "moveAndSpin2 1300ms linear forwards",
                moveAndSpin3: "moveAndSpin3 1300ms linear forwards",
                moveAndSpin4: "moveAndSpin4 1300ms linear forwards",
                disappear: "disappear 650ms linear forwards",
                appear: "appear 650ms linear forwards",
            }
        },
    },
    plugins: [],
}
