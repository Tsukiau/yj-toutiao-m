import axios from 'axios'
import store from '@/store'
import router from '@/router'
import axiosRetry from 'axios-retry';  // 请求失败后自动重新请求
const request = axios.create({
   //baseURL: 'http://toutiao.itheima.net/',
   baseURL: 'http://geek.itheima.net/',
    //timeout: 5000
    retry: 3, // 请求次数
    retryInterval: 500 // 请求间隙
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
},
/*  async error => {
  if(error.response && error.response.status === 401){
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
  } 
}  */
 function axiosRetryInterCeptor(res){
    let config = res.config;
    console.log(config)
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
     /*  */
     if(error.response && error.response.status === 401){
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
 } 

    // 返回axios实例重新请求
    return back.then(function(){
        return request(config)
    })
 } 
)
 
export default request
