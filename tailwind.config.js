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
                'vt323':['VT323', 'monospace'],
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit,minmax(100px,1fr))'
            },
            height: {
                '112':'28rem',
                '128': '32rem',
                '192':'48rem',
                '196':'52rem',
                '90vh':'90vh'
            },
            maxHeight: {
                '112':'28rem',
                '128': '32rem',
                '168':'42rem',
                '192':'48rem',
                '196':'52rem',
            },
            width: {
                '45%':'45%',
                '55%':'55%',
            },
            aspectRatio: {
                'standard':'4/3'
            },
            scale: {
                '101':'101%',
                '102':'102%'
            },
            backgroundColor: {
                //Primary = Dark mode
                'primary-1':'#161211',
                'primary-2':'#212121',
                'primary-3':'#eee',
                //Secondary = light mode
                'secondary-1':'#ccc',
                'secondary-2':'#ddd',
                'secondary-3':'#eee',    
                'feature-1':'#fb923c',
                'feature-2':'#c46d25'   
            },
            textColor: {
                //Primary = Dark mode
                'primary-1':'#343434',
                'primary-2':'#ddd',
                'primary-3':'#ccc',
                //Secondary = light mode
                'secondary-1':'#000',
                'secondary-2':'#333',
                'secondary-3':'#666',
                'feature-1':'#fb923c',
                'feature-2':'#c46d25'
            },
            screens: {
                'xs': {'max': '600px'},
            },
            keyframes: {
                moveAndSpin1: {
                    "0%": {
                        top:"46px",
                        transform: "rotate(0)"
                    },
                    "50%": {
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
                    "50%": {
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
                    "50%": {
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
                    "50%": {
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
                    "50%": { opacity: "100%"},
                    "100%": {opacity: "0"}
                },
                appear: {
                    "0%": { opacity: "0"},
                    "50%": { opacity: "0"},
                    "100%": {opacity: "100%"}
                }
            },
            animation: {
                moveAndSpin1: "moveAndSpin1 400ms linear forwards",
                moveAndSpin2: "moveAndSpin2 400ms linear forwards",
                moveAndSpin3: "moveAndSpin3 400ms linear forwards",
                moveAndSpin4: "moveAndSpin4 400ms linear forwards",
                disappear: "disappear 200ms linear forwards",
                appear: "appear 200ms linear forwards",
            }
        },
    },
    plugins: [],
}
