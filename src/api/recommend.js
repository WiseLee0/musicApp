import axios from 'axios'
import { commonParams } from './config'

// 获取轮播图的数据
export function getBanner () {
  const url = '/api/getBanner'
  const data = Object.assign({}, commonParams, {
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}