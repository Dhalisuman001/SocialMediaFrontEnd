import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development or production)
  const env = loadEnv(mode, process.cwd(), "");

  // Access the backend URL from the loaded environment variables
  const backendUrl = env.VITE_BACKEND_URL;

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
