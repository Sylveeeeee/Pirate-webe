// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: 
     {
        "meta": [
          {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1"
          },
          {
            "charset": "utf-8"
          }
        ],
        "link": [{
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        },
        
      ],
        "style": [],
        "script": [],
        "noscript": []
      }
  },
  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
  devtools: { enabled: false },
  compatibilityDate: "2024-08-12",
  modules: ["@nuxt/icon"]
})