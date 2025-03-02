import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from "dotenv";
import process from "node:process";
import tailwindcss from '@tailwindcss/vite'

const env = dotenv.config({path: `.env.${process.env.NODE_ENV}`}).parsed;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
      port: 8081,
      allowedHosts: [env ? env.TELEGRAM_APP_DOMAIN : ''],
      cors: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
