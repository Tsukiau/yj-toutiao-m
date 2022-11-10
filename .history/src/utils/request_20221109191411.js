import axios from 'axios'
import store from '@/store'
import router from '@/router'
const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  //baseURL: 'http://geek.itheima.net/',
  // timeout: 5000
})

 // 请求拦截器
request.interceptors.request.use(config => {
  console.log(store.state.user);
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
  if(!message) return Promise.reject(new Error(message))
  
  return data
},async error => {
  if(error.request.status === 401){
    //router.push('/login')
     await axios({
        u
    })
  }
   return Promise.reject(error)
})
 
export default request
