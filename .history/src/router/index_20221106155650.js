import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      },
      {
        path: '/ask',
        name: 'ask',
        component: () => import('@/views/ask')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

/* 前置守卫 */




export default router
