import path from 'node:path';
import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

// import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // UnoCSS(),
    React(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'games': path.resolve(__dirname, './src/games'),
      'utils': path.resolve(__dirname, './src/utils'),
      'hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
});
