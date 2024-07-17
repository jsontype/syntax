import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const baseUrl = mode == "production" ? env.VITE_URL : "/";

  return {
    base: baseUrl,
    plugins: [react()],
    build: {
      outDir: "build",
      minify: true,
    },
  };
});
