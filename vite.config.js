import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Valentines-project/' // <-- Substitua pelo nome do seu repositório
})