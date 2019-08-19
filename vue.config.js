module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'common': '@/common',
        'components': '@/components',
        'base': '@/base',
        'api': '@/api',
        'router': '@/router'
      }
    }
  },
}