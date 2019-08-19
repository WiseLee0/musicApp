import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'

// 解决移动端点击延迟
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
