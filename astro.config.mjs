// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://dmu-nurinarae.github.io',
  base: '/onboarding',
  integrations: [
    starlight({
      title: "누리나래 온보딩",
      customCss: ["./src/styles/glass.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/DMU-Nurinarae/",
        },
      ],
      sidebar: [
        {
          label: "오리엔테이션",
          autogenerate: {directory: "guides"},
        },
        {
          label: "소프트웨어",
          autogenerate: {directory: "software"},
        },
      ],
    }),
  ],
});
