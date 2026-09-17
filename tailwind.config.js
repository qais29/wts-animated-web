/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#030712',
          card: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.06)',
          dark: '#010308',
          glow: '#0B132B'
        },
        cyan: {
          electric: '#0080FF',
          neon: '#00F0FF',
        },
        indigo: {
          neon: '#6366F1',
        },
        violet: {
          cyber: '#A855F7',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        clash: ['Poppins', 'sans-serif'],
        grotesk: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(3, 7, 18, 0.7) 80%, rgba(3, 7, 18, 0.95) 100%)',
        'linear-edge-mask': 'linear-gradient(to bottom, rgba(3,7,18,0.8) 0%, transparent 15%, transparent 85%, rgba(3,7,18,0.95) 100%)',
        'neon-gradient': 'linear-gradient(135deg, #0080FF 0%, #6366F1 50%, #A855F7 100%)',
        'metallic-text': 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 50%, #0080FF 100%)',
      }
    },
  },
  plugins: [],
}
