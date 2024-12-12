import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, './src/css'),
      '@js': path.resolve(__dirname, './src/js'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: 'dist',
  },
});
