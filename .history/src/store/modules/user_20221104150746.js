import { getToken,setToken } from '@/utils/Cookies'
import { login } from '@/api/user'

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
         const token = await login(data)
         console.log(token);
       }
    },


    export default {
}