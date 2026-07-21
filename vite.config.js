import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('/src/data/')) {
            return 'stories-data';
          }
          if (id.includes('/src/components/Characters')) {
            return 'characters';
          }
          // Scene files get their own chunks (lazy-loaded per story)
          if (id.includes('/src/components/scenes/')) {
            return undefined; // let Vite handle splitting
          }
          if (id.includes('/src/components/ComicViewer') || 
              id.includes('/src/components/SceneRenderer')) {
            return 'comic-viewer';
          }
        },
      },
    },
  },
})
