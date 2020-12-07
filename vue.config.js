module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/app/'
  : '/',
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
    name: 'Замерщик. Пластика Окон',
    themeColor: '#33C5F3',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // настройки манифеста
    manifestOptions: {
      orientation: 'portrait',
      display: 'fullscreen',
      background_color: '#ffffff',
      start_url: '.'
    },

    // // настройка workbox-плагина
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc необходимо в режиме InjectManifest
    //   swSrc: 'dev/sw.js',
    //   // ...другие настройки Workbox...
    // }
  }
};