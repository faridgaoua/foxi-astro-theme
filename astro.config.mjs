import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gleeful-vacherin-109992.netlify.app",
  integrations: [icon(), sitemap()],
});
