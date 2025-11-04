import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  build: {
    rollupOptions: {
      input: {
        popup: 'popup/index.html',
      },
      output: {
        // Ensure TensorFlow.js is bundled properly
        manualChunks: undefined,
      },
    },
    // Increase chunk size limit for TensorFlow.js
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3000,
    hmr: {
      port: 3000,
    },
  },
  optimizeDeps: {
    // Include TensorFlow.js in optimization
    include: ['@tensorflow/tfjs'],
  },
  // Fix for Chrome extension CSP
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})