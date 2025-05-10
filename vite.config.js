import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';


export default defineConfig({
  plugins: [react(),mdx()],
  server: {
    port: 5173, // Default port
  },
});