import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-portfolio/",  // Keeps your base URL for deployment
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Splitting third-party libraries into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,  // Adjust the size limit for chunk warnings (1000 KB = 1 MB)
  },
})
