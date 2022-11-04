import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/',
  timeout: 5000
})

 request.interceptors.response.use(response => {
  const {message, data} = response.data
if(!message)return new Promise()

}) 
 
export default request
