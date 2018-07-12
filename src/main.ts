import Vue from 'vue'
import App from './App.vue'
import router from './router'
import loading from './common/plugins/loading/index'
import Request from './common/plugins/request/index'
// 引入指令
import './common/directives/index'

// USE插件
Vue.use(loading)
Vue.use(Request)

Vue.config.productionTip = false

const vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
