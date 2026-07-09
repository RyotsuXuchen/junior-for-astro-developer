// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://offical-astro-tutorial-project.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
