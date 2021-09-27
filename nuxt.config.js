export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Some Are Gone',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'36x36', href: '/36.png' },
      { rel: 'icon', type: 'image/png', sizes:'48x48', href: '/48.png' },
      { rel: 'icon', type: 'image/png', sizes:'72x72', href: '/72.png' },
      { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/96.png' },
      { rel: 'icon', type: 'image/png', sizes:'144x144', href: '/144.png' },
      { rel: 'icon', type: 'image/png', sizes:'192x192', href: '/192.png' }
    ]
  },

  styleResources: {
    scss: [
      '~/assets/scss/_fonts.scss',
      '~/assets/scss/_mixin.scss',
      '~/assets/scss/main.scss'
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '~/assets/scss/main.scss', lang: 'scss'},
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
