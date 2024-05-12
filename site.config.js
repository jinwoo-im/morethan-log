const CONFIG = {
  // profile setting (required)
  profile: {
    name: "정훈",
    image: "/profileImg.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Front-End Developer",
    bio: "Grow to learn, learn to grow.",
    email: "wjdgnsxhsl@naver.com",
    linkedin: "",
    github: "gnslalsl12",
    instagram: "",
  },
  projects: [
    {
      name: `Web Portfolio`,
      href: "https://gnslalsl12.github.io/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Hoony Blog",
    description: "Welcome to Hoony Blog!",
  },

  // CONFIG configration (required)
  link: "https://hoonyblog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Javascript", "Typescript", "Node"],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 10000 * 6, // revalidate time for [slug], index
}

module.exports = { CONFIG }
