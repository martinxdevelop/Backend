import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Puerto en el que corre tu servidor frontend
  },
  define: {
    'process.env': process.env  // Permite acceder a variables de entorno en el frontend
  }


});

