import axios from 'axios'
import store from '@/store'
import router from '@/router'
import axiosRetry from 'axios-retry';  // 请求失败后自动重新请求
const request = axios.create({
   //baseURL: 'http://toutiao.itheima.net/',
   baseURL: 'http://geek.itheima.net/',
    //timeout: 5000
})


 // 请求拦截器
request.interceptors.request.use(config => {
    if(store.state.user.token){
       config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
},error => {
  return Promise.reject(error)
})


// 响应拦截器
request.interceptors.response.use(response => {
  const { message, data } = response.data
  return data
},async error => {
/*  if(error.response && error.response.status === 401){
       // token过期了
     if(store.state.user){
      const res =  await axios({
        url:'http://toutiao.itheima.net/v1_0/authorizations',
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${store.state.user.refresh_token}`
        }
    })
    store.commit('user/setToken',res.data.data.token)
    store.commit('user/setRefresh_token',store.state.user.refresh_token)

    return request(error.config)
  }else {
     // 没有token，就直接跳转登录页面
     router.push('/login')
  }  
  }else {
    return Promise.reject(error)
  }  */
})
 
export default request
