import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/',
  component: () => import('../components/home.vue'),
  children: [
    //   首页
    {
      path: '/home',
      component: resolve => require(['../views/welcome.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demo1',
      component: resolve => require(['../views/demo/demo1.vue'], resolve),
      meta: {
        title: 'CSS相关'
      }
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
