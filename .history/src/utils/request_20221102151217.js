import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  timeout: 5000
})

request.interceptors.response.use
export default request
