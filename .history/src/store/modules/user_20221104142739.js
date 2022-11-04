import { getToken,setToken } from '@/utils/'
import { login } from '@/api/user'
export default {
    state: {
       token: getToken()
    },
    mutations: {
       setToken(state,token){
         state.token = token
         setToken(token)
       }
    },
    actions: {
       async login(context, data){
         const res = await login(data)
       }
    },
    getters: {
      
    }
}