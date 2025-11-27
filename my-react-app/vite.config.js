import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite';

const env = loadEnv('development', process.cwd(), '');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      '/productos':{
        target:env.VITE_API_BASE_URL,
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/productos/, '')
      }
    }
  }
})
