import { getToken,setToken } from "@/utils/Cookies"
export default {
    state: {
       token: getToken()
    },
    mutations: {
       setToken(state,token){
         state.token = token
       }
    },
    actions: {
       async login(context, data){
         const res = await login
       }
    }
}