import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8000,
    strictPort: true,
    allowedHosts: ['car.framework.autopath.ai', 'car.localhost', 'localhost'],
    headers: {
      'Content-Security-Policy': 'frame-ancestors https://framework.autopath.ai https://*.framework.autopath.ai http://localhost http://*.localhost'
    },
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  }
});
