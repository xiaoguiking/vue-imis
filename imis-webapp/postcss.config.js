module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },

    'postcss-pxtorem': {
      rootValue: 37.5,
      // 需要转换的css属性， *号表示所有的属性都转换
      propList: ['*']
    }
  }
}
