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
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap"
        },
      ],
        "style": [],
        "script": [],
        "noscript": []
      }
  },
  devtools: { enabled: true }
})
