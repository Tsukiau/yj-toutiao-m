import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  timeout: 5000
})

/* request.interceptors.response.use(response => {
  console.log('123', response)
}) */

// http response 拦截器
service.interceptors.response.use(
  response => {
if (response.data.status !== 1 && response.data.status !== 200) {
。。。
      Message.error(response.data.msg || '请求错误')
      return Promise.reject(rejection)
    }
    return Promise.resolve(response.data)
  },
  error => {
。。。
    return Promise.reject(error)
  }

————————————————
版权声明：本文为CSDN博主「一点光辉」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_22701869/article/details/107816023
export default request
