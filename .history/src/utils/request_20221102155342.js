import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  timeout: 5000
})

/* request.interceptors.response.use(response => {
  console.log('123', response)
}) */

// http response 拦截器
request.interceptors.response.use(
  response => {
if (response.data.status !== 1 && response.data.status !== 200) {

      Message.error(response.data.msg || '请求错误')
      return Promise.reject(rejection)
    }
    return Promise.resolve(response.data)
  },
  error => {

    return Promise.reject(error)
  }

  
export default request
