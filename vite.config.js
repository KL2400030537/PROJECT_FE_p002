import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    port : 1000
  },
  base: '/PROJECT_FE_p002/'
})
