import Vue from 'vue'
import Router from 'vue-router'
import Post from './post'
import Resume from './resume'
import Index from '@/layouts/Index'
import AboutIndex from '@/layouts/about/Index'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about/index',
      name: 'AboutIndex',
      component: AboutIndex
    },
    ...Post,
    ...Resume
  ]
})
