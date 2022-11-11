import axios from 'axios'
import store from '@/store'
const serve = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  // baseURL: 'http://geek.itheima.net/',
    //timeout: 5000,
    retry: 3, // 请求次数
    retryInterval: 500 // 请求间隙
})


 // 请求拦截器
 serve.interceptors.request.use(config => {
    if(store.state.user.token){
       config.headers.Authorization = `Bearer ${store.state.user.token}`
    }
    return config
},error => {
  return Promise.reject(error)
})


// 响应拦截器
serve.interceptors.response.use(response => {
    return response
},
 function axiosRetryInterCeptor(res){
    
 }
)
 
export default serve
