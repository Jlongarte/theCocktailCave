import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/_redirects",
          dest: "[ext]" == "none" ? "" : "",
        },
      ],
    }),
  ],
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
