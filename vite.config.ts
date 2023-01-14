import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./public/manifest.json";
import path from "path";

const manifestV3: any = manifest;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    crx({
      manifest: manifestV3,
    }),
  ],

  resolve: {
    alias: { src: path.resolve(__dirname, "src") },
  },
  server: {
    origin: "http://127.0.0.1:3000",
    // host: "0.0.0.0",
    // 是否开启 https
    https: false,
    port: 3000,
    cors: true,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
