import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' 
    
export default defineConfig({
  define: {
    PROCESS_VERSION: {v: process.version},
  },
  plugins: [react()],
  server: {
    hrm: {
      port: 443,
    }
  }
});