import Vue from 'vue'
import Router from 'vue-router'
import Testing from '@/layouts/Testing'
import Index from '@/layouts/Index'
import Login from '@/layouts/Login'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/testing',
      name: 'Testing',
      component: Testing
    }, {
      path: '/user/login',
      name: 'Login',
      component: Login
    }
  ]
})
