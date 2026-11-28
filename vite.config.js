import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const { TMDB_READ_TOKEN = "" } = loadEnv(mode, process.cwd(), "TMDB_");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api/tmdb/": {
          target: "https://api.themoviedb.org",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/tmdb/, "/3"),
          headers: { Authorization: `Bearer ${TMDB_READ_TOKEN}` },
        },
      },
    },
  };
});
