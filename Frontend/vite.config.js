import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

//import mkcert from 'vite-plugin-mkcert'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    http: true
  },
  build: {
    outDir: 'dist', // Ensure this matches your Dockerfile path
    assetsDir: 'assets', // Assets folder
  },
})
