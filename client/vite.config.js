import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '127.0.0.1',
    strictPort: true,
    fs: {
      allow: [
        // keep existing allowed paths (macOS examples)
        '/Users/soumyajitghosh/grief-companion',
        '/Volumes/T7 Shield/grief-companion',
        // allow this repository on Windows
        path.resolve(__dirname, '..'),
        // explicit absolute for the user's workspace root
        path.resolve('C:/Users/KIIT0001/Documents/GitHub/Saathi'),
      ],
    },
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
