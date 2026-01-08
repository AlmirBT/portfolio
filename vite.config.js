import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Для локальной разработки используем '/', для продакшена - '/almirsiterecode/'
  const base = command === 'serve' ? '/' : '/almirsiterecode/'
  
  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    }
  }
})
