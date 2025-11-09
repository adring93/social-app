export default {
  content: ["./index.html", "./feed/**/*.html", "./profile/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef6ff",
          100: "#d9ecff",
          200: "#bfe0ff",
          300: "#93c8ff",
          400: "#5ba7ff",
          500: "#2f7dff",   // main
          600: "#205fe0",
          700: "#1a4bb3",
          800: "#173f93",
          900: "#132f6b"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
