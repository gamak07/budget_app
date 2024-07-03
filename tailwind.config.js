/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      // Primary color: #3498DB (a bright, calming blue)
      primaryColor: '#3498DB',
      // Secondary color: #F1C40F (a warm, inviting orange)
      secondaryColor: '#F1C40F',
      // Accent color: #2ECC71 (a vibrant, energetic green)   
      accentColor: '#2ECC71',
      // Background color: #FFFFFF (white) or #F7F7F7 (light gray)
      backgroundColor: '#FFFFFF',

      // Buttons:
      // Primary button: #3498DB with white text
      primaryButton: '#3498DB',
      // Secondary button: #F1C40F with dark text
      secondaryButton: '#F1C40F',
      // Accent button: #2ECC71 with white text
      accentButton: '#2ECC71',

      // Forms:
      inputColor: '#F7F7F7',

      deepRed: '#E74C3C',

      darkGray: '#666666'
      
    },
    
    fontFamily: {
      openSans: 'Open Sans',
      montserrat: 'montserrat',
      greatVibes: 'Great Vibes',
    },
    extend: {
      
    },
  },
  plugins: [],
}

