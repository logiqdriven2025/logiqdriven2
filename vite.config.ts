import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true, // This enables listening on all network interfaces
    open: true, // This opens the browser automatically
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
