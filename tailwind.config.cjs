module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f3ea',
        ink: '#1f1b17',
        moss: '#2d7c7a',
        clay: '#b45d45',
        sand: '#e7dbc8',
        line: 'rgba(31, 27, 23, 0.12)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(31, 27, 23, 0.12)',
        insetGlow: 'inset 0 1px 0 rgba(255, 255, 255, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        rise: 'rise 0.8s ease both',
        shimmer: 'shimmer 16s linear infinite',
      },
    },
  },
  plugins: [],
};
