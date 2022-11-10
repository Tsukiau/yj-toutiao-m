import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
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

/*前置守卫 */
 router.beforeEach((to, from, next) => {
   console.log(store.state.user.token);
   if(store.state.user.token){
      next()
   }else {
      if(to.path === '/login'){
        next()
        return 
      }
   }
   next()
})  



export default router
