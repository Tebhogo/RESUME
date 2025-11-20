import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/RESUME/',
  root: '.',
  publicDir: 'src/assets',
  build: {
    outDir: 'dist-react',
    assetsDir: 'assets',
    copyPublicDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src-react')
    }
  }
})

