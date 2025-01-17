import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//import mkcert from 'vite-plugin-mkcert'
// https://vitejs.dev/config/
import dotenv from 'dotenv';
import path from 'path';

// Load the .env file from the root folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist', // Ensure this matches your Dockerfile path
    assetsDir: 'assets', // Assets folder
  },
  // define: {
  //   'process.env.VITE_DEV_BACKEND_URL': JSON.stringify(process.env.VITE_DEV_BACKEND_URL),
  // }
})
