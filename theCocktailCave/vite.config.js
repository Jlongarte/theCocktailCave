import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api-cocktails": {
        target: "https://cocktailsapi-9qny.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-cocktails/, ""),
      },
    },
  },
});
