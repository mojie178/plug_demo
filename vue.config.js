const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // 基本路径
  publicPath: '/demo',
  // 输出打包目录
  outputDir: 'web_demo',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 渲染成真是DOM
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.(js|css)$/,
            threshold: 10240, // 10k
            deleteOriginalAssets: false
          })
        ]
      };
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    //启动端口
    port: 9999,
    https: true,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {},
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  // https://github.com/Justineo/vue-awesome
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
};
