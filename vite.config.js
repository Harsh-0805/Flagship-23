import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Include .mov files as assets
  assetsInclude: ["**/*.mov"],

  plugins: [
    react(), // React plugin for Vite
  ],

  // Optional: You can add more configurations here if needed
});
