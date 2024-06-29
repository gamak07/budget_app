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
      // Input fields: #F7F7F7 with a #3498DB border
      inputColor: '#F7F7F7',
      // Labels: #666666 (dark gray)
      labelsColor: '#666666',

      // Navigation:
      // Menu items: #3498DB with white text
      menuColor: '#3498DB',
      // Active menu item: #2ECC71 with white text
      activeMenuColor: '#2ECC71',

      // Alerts and Notifications:
      // Success: #2ECC71 with white text
      successColor: '#2ECC71',
      // Error: #E74C3C (a deep, bold red) with white text
      errorColor: '#E74C3C',

      // Icons:
      iconColor: '#666666'
      // Icon color: #666666 (dark gray) or #3498DB (blue)
      
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

