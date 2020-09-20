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
      component: () => import('../views/welcome.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demo1',
      component: () => import('../views/demo1.vue'),
      meta: {
        title: 'CSS相关'
      }
    },
    {
      path: '/demo2',
      component: () => import('../views/demo2.vue'),
      meta: {
        title: 'less'
      }
    },
    {
      path: '/demo3',
      component: () => import('../views/demo3.vue'),
      meta: {
        title: '深拷贝'
      }
    },
    {
      path: '/father',
      component: () => import('../views/slot-demo/father.vue'),
      meta: {
        title: '插槽'
      }
    },
    {
      path: '/flex',
      component: () => import('@/views/layout/flex-demo.vue'),
      meta: {
        title: 'flex布局'
      }
    },
    {
      path: '/block',
      component: () => import('@/views/layout/block.vue'),
      meta: {
        title: 'css动画'
      }
    }
  ]
}
]

const router = new VueRouter({
  routes
})

export default router
