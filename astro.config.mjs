// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tdec1.github.io",
  base: "/", // o lo puedes omitir
  vite: { plugins: [tailwindcss()] },
});
