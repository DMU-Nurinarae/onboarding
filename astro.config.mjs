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
          items: [
            { label: "들어가며", slug: "guides/intro" },
            { label: "살펴보기", slug: "guides/overview" },
            { label: "개발 문화", slug: "guides/dev_culture" },
          ],
        },
        {
          label: "캐드와 3D 프린팅",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "캐드 알아보기", slug: "cad/intro" },
            { label: "Fusion 설치하기", slug: "cad/install" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
