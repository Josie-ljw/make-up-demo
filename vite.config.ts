import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  base: process.env.VITE_BASE ?? '/make-up-demo/',
})
