// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  debug: true,
  components: true,
  modules: ['@unocss/nuxt', 'nuxt-api-party', 'arco-design-nuxt-module'],
  css: [
    '@unocss/reset/tailwind.css',
    'assets/index.less',
    'assets/iconfont/iconfont.css'
  ],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },
  runtimeConfig: {
    apiParty: {
      endpoints: {
        http: {
          url: 'https://api.gzlle.com'
        }
      }
    }
  },
  apiParty: {
    endpoints: {
      http: {
        url: 'https://api.gzlle.com'
      }
    }
  }
})
