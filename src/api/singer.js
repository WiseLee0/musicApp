import axios from 'axios'
import { commonParams } from './config'

export function getSingerList (letter, area = -100) {

  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    '-': 'getUCGI15774718990432723',
    g_tk: 5381,
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: {
      "comm":
      {
        "ct": 24,
        "cv": 0
      },
      "singerList":
      {
        "module": "Music.SingerListServer",
        "method": "get_singer_list",
        "param": {
          "area": area,
          "sex": -100,
          "genre": -100,
          "index": letter,
          "sin": 0,
          "cur_page": 1
        }
      }
    }
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}