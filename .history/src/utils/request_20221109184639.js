import axios from 'axios'
import store from '@/store'
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  //baseURL: 'http://geek.itheima.net/',
  // timeout: 5000
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
},error => {
  console.log(.request.status)
   
})
 
export default request
