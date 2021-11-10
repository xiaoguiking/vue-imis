module.exports = {
  devServer: {
    port: 8086,
    open: true,
    // 代理接口
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/api': {
        target: 'http://localhost:3000', // 代理接口
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/api' // 代理的路径
        }
      }
    }
  }
}
