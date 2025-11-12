/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'scale-in': 'scaleIn 0.5s ease-out',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'shimmer': 'shimmer 2s infinite',
        'text-gradient': 'textGradient 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
        'flip': 'flip 0.6s ease-in-out',
        // 3D Animations
        'rotate-y': 'rotateY 2s ease-in-out infinite',
        'rotate-x': 'rotateX 2s ease-in-out infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
        'flip-x': 'flipX 0.8s ease-in-out',
        'flip-y': 'flipY 0.8s ease-in-out',
        'cube-rotate': 'cubeRotate 20s linear infinite',
        '3d-pop': 'pop3d 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'swing-3d': 'swing3d 4s ease-in-out infinite',
        'float-3d': 'float3d 6s ease-in-out infinite',
        'bounce-3d': 'bounce3d 2s ease-in-out infinite',
        'ripple-3d': 'ripple3d 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        textGradient: {
          'to': { backgroundPosition: '200% center' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' },
        },
        // 3D Keyframes
        rotateY: {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateY(180deg)' },
        },
        rotateX: {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(180deg)' },
        },
        tilt: {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' },
          '75%': { transform: 'perspective(1000px) rotateX(-5deg) rotateY(-5deg)' },
        },
        flipX: {
          '0%': { transform: 'perspective(800px) rotateX(0deg)' },
          '100%': { transform: 'perspective(800px) rotateX(360deg)' },
        },
        flipY: {
          '0%': { transform: 'perspective(800px) rotateY(0deg)' },
          '100%': { transform: 'perspective(800px) rotateY(360deg)' },
        },
        cubeRotate: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateX(180deg) rotateY(180deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(360deg) rotateY(360deg)' },
        },
        pop3d: {
          '0%': { transform: 'perspective(1000px) translateZ(-100px) scale(0.5)', opacity: '0' },
          '50%': { transform: 'perspective(1000px) translateZ(50px) scale(1.1)' },
          '100%': { transform: 'perspective(1000px) translateZ(0) scale(1)', opacity: '1' },
        },
        swing3d: {
          '0%, 100%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '25%': { transform: 'perspective(1000px) rotateX(15deg)' },
          '75%': { transform: 'perspective(1000px) rotateX(-15deg)' },
        },
        float3d: {
          '0%, 100%': { transform: 'perspective(1000px) translateY(0px) translateZ(0px)' },
          '50%': { transform: 'perspective(1000px) translateY(-20px) translateZ(30px)' },
        },
        bounce3d: {
          '0%, 100%': { transform: 'perspective(1000px) translateZ(0) scale(1)' },
          '50%': { transform: 'perspective(1000px) translateZ(50px) scale(1.1)' },
        },
        ripple3d: {
          '0%': { transform: 'perspective(1000px) scale(0) translateZ(0)', opacity: '1' },
          '100%': { transform: 'perspective(1000px) scale(2) translateZ(100px)', opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};


