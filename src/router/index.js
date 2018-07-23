import Vue from 'vue'
import Router from 'vue-router'
import Post from './post'
import Index from '@/layouts/Index'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    ...Post
  ]
})
