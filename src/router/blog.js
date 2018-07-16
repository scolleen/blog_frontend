import Index from '@/layouts/blog/Index'
import Detail from '@/layouts/blog/Detail'

export default [
  {
    path: '/blog/index',
    name: 'BlogIndex',
    component: Index
  }, {
    path: '/blog/detail/:id',
    name: 'BLogDetail',
    component: Detail
  }
]
