import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  // timeout: 5000
})

// 请求拦截器
request.interceptors.request.user(config)


// 响应拦截器
request.interceptors.response.use(response => {
  const { message, data } = response.data
  if (!message) return Promise.reject(new Error(message))
  return data
})

export default request
