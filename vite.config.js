import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['car.framework.autopath.ai', 'car.localhost', 'localhost']
  }
});


