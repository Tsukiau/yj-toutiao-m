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
    component: () => import('@/views/layout')
  },
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
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/')
  }
]

const router = new VueRouter({
  routes
})

export default router
