import Vue from 'vue'
import Router from 'vue-router'
import SingerDetail from 'components/singer-detail/index'

const Recommend = (resolve) => {
  import('components/recommend/index').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('components/rank/index').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('components/search/index').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('components/singer/index').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/Recommend'
  }, {
    path: '/recommend',
    component: Recommend
  }, {
    path: '/rank',
    component: Rank
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  }]
})