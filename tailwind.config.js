export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium brown palette - Dear Desserts brand
        "warm-cream": "#F5EFE7",
        "light-tan": "#FAF8F3",
        "rich-brown": "#5C4A3D",
        "warm-brown": "#8B6F47",
        "accent-brown": "#A0826D",
        "dark-chocolate": "#3E2723",
        "gold-accent": "#C9A961",
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "San Francisco", "Segoe UI", "Roboto", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "San Francisco", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["13px", "17px"],
        base: ["15px", "20px"],
        lg: ["17px", "22px"],
        xl: ["19px", "25px"],
        "2xl": ["24px", "31px"],
        "3xl": ["32px", "41px"],
      },
      boxShadow: {
        "premium": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "premium-lg": "0 4px 16px rgba(0, 0, 0, 0.12)",
        "premium-xl": "0 8px 32px rgba(0, 0, 0, 0.14)",
        "premium-hover": "0 12px 48px rgba(0, 0, 0, 0.16)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
