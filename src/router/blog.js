import Index from '@/layouts/post/Index'
import Detail from '@/layouts/post/Detail'
import Create from '@/layouts/post/Create'

export default [
  {
    path: '/post/index',
    name: 'PostIndex',
    component: Index
  }, {
    path: '/post/detail/:id',
    name: 'PostDetail',
    component: Detail
  }, {
    path: '/post/create',
    name: 'PostCreate',
    component: Create
  }
]
