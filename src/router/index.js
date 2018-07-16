import Vue from 'vue'
import Router from 'vue-router'
import Blog from './blog'
import Index from '@/layouts/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ...Blog
  ]
})
