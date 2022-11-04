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
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
