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
});
