import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

/*import react from '@vitejs/plugin-react';
import postcss from 'vite-plugin-postcss';

export default {
  plugins: [react(), postcss()],
};*/
