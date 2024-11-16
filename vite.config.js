import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Optional: Alias for clean imports
      '@': '/src',
    },
  },
  build: {
    outDir: 'build',
  },
});
