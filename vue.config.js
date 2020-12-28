module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/app/'
  // : '/',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]',
      });
  },
  pwa: {
    name: '\u0417\u0430\u043c\u0435\u0440\u0449\u0438\u043a. \u041f\u043b\u0430\u0441\u0442\u0438\u043a\u0430 \u041e\u043a\u043e\u043d',
    themeColor: '#33C5F3',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // настройки манифеста
    manifestOptions: {
      icons: [
        {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        }
    ],
      orientation: 'portrait',
      display: 'fullscreen',
      background_color: '#ffffff',
      start_url: '.'
    },
    iconPaths: {
      favicon32: 'favicon-32x32.png',
      favicon16: 'favicon-16x16.png',
      maskIcon: 'safari-pinned-tab.svg',
      msTileImage: 'mstile-150x150.png',
      appleTouchIcon: 'apple-touch-icon.png'
      
    }

    // // настройка workbox-плагина
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc необходимо в режиме InjectManifest
    //   swSrc: 'dev/sw.js',
    //   // ...другие настройки Workbox...
    // }
  }
};