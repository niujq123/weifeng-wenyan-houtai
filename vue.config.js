//let root = "";
const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)
module.exports = {
  devServer: {
    disableHostCheck: true,
    open: true,
    host: '192.168.10.28',
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: IS_PROD,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
},
}
