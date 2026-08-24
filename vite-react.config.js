import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/RESUME/',
  root: '.',
  publicDir: 'src/assets',
  build: {
    outDir: 'dist-react',
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src-react')
    }
  }
})



