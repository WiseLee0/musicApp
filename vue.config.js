const axios = require('axios')
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
  devServer: {
    before (app) {
      // 获取轮播图数据
      app.get('/api/getBanner', (req, res) => {
        const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
        axios.get(url, {
          headers: {
            Referer: 'https://y.qq.com/m/index.html',
            Origin: 'https://y.qq.com'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })

    }
  }
}