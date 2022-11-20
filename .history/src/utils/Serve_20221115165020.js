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
    let config = res.config;
    // 如果配置不存在或属性未设置， 抛出错误
    if(!config || !config.retry) return Promise.reject(res)
   // 设置一个变量记录重新请求的次数
    config.retryCount = config.retryCount || 0
    if(config.retryCount >= config.retry){
       return Promise.reject(res)
    }
    // 重新请求次数自增
    config.retryCount++
    // 创建新的promise 来处理重新请求的间隙
    let back = new Promise(function(resolve) {
          console.log('接口'+ config.url+ '请求超时，重新请求')
          setTimeout(function(){
              resolve()
          },config.retryInterval || 1)
    })
    // 返回axios实例重新请求
    return back.then(function(){
        return serve(config)
    })
 }
)
 
export default serve
