import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 🔁 backend running port
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
