import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import lodash from 'lodash'
// import marked from 'marked'
import mavonEditor from 'mavon-editor'
import loading from './common/plugins/loading/index'
import Request from './common/plugins/request/index'
// 引入js文件
import './common/api'
// 引入指令
import './common/directives/index'
// 引入markdown 样式
import 'mavon-editor/dist/css/index.css'

// USE插件
Vue.use(loading)
Vue.use(Request, {
  domain: 'https://api.kags.com/v1/'
})
// Vue.use(lodash)
// Vue.use(marked)
Vue.use(mavonEditor)

Vue.config.productionTip = false

const vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
