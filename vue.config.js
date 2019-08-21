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

      // 获取recommend歌单数据
      app.get('/api/getSongList', function (req, res) {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
        axios.get(url, {
          headers: {
            Origin: 'https://y.qq.com',
            Referer: 'https://y.qq.com/portal/playlist.html'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })

      // 获取歌手列表数据
      app.get('/api/getSingerList', function (req, res) {
        var url = 'ttps://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            Origin: 'https://y.qq.com',
            Referer: 'https://y.qq.com/portal/singer_list.html'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })
    }
  }
}