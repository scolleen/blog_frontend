import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'
import loading from './common/plugins/loading/index'
import Request from './common/plugins/request/index'
// 引入js文件
import './common/api'
// 引入指令
import './common/directives/index'
// 引入markdown 样式
import 'mavon-editor/dist/css/index.css'
// 引入api文件
import api from './common/api/index'

// USE插件
Vue.use(loading)
Vue.use(Request, {
  // domain: 'http://111.231.77.177:3000/',
  domain: 'http://127.0.0.1:3000/',
  api: api
})
Vue.use(mavonEditor)

Vue.config.productionTip = false

const vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
