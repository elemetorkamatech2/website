import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()
export default defineConfig({
  plugins: [react()],
  //port: Number(process.env.VITE_URL_API) || 3003

})