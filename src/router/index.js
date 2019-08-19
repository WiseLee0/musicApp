import Vue from 'vue'
import Router from 'vue-router'

const Recommend = (resolve) => {
    import('components/recommend/recommend').then((module) => {
        resolve(module)
    })
}

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/Recommend'
    }, {
        path: '/Recommend',
        component: Recommend
    }]
})