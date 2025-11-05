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
        manualChunks: undefined,
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3000,
    hmr: {
      port: 3000,
    },
  },
  optimizeDeps: {
    include: ['@tensorflow/tfjs'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  }
})