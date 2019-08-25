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
    before(app) {
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

      // 获取歌手歌曲数据
      app.get('/api/getSingerSongs', function (req, res) {
        var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
        axios.get(url, {
          headers: {
            Origin: 'https://i.y.qq.com',
            Referer: 'https://i.y.qq.com/n2/m/share/details/singer.html'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })

      // 获取歌曲的vkey
      app.get('/api/getSongVkey', function (req, res) {
        var url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
        axios.get(url, {
          headers: {
            Origin: 'https://y.qq.com',
            Referer: 'https://y.qq.com/portal/player.html'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })

      // 获取歌词
      app.get('/api/getLyric', function (req, res) {
        var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
        axios.get(url, {
          headers: {
            Origin: 'https://y.qq.com',
            Referer: 'https://y.qq.com/portal/player.html'
          },
          params: req.query
        }).then(result => {
          res.json(result.data)
        })
      })
    }
  }
}