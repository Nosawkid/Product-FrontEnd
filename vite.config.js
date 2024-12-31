import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://products-backend-3ff6.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
