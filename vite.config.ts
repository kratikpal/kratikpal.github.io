import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = 'kratikpal.github.io'; 

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: `/${repositoryName}/`
});