import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "travel-site",
    "compatibilityDate": "2026-10-06",
    "domains": ["travel.withalex.link"],
    "observability": {
      "enabled": true
    }
  }
});
