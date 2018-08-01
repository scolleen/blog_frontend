import Index from '@/layouts/post/Index'
import Detail from '@/layouts/post/Detail'
import Create from '@/layouts/post/Create'
import List from '@/layouts/post/List'

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
  }, {
    path: '/post/list',
    name: 'PostList',
    component: List
  }
]
