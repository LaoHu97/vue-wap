const Home = () => import('@/Home')
const Index = () => import('@/view/index/Index')
const Details = () => import('@/view/index/Details')

let routes = [
  {
    path: '',
    name: '',
    component: Index
  },{
      path: '/',
      component: Home,
      children: [
        { path: 'index',name: '老司机', component: Index },
        { path: 'details',name: '电影详情', component: Details },
      ]
  }
]

export default routes
