import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
  },
  server: {
    allowedHosts: ["localhost", "zegirdordev.com", ".zegirdordev.com", ".onrender.com"]
  }
});
