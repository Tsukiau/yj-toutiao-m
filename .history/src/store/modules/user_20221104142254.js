import { getToken,setToken } from "@/utils/Cookies"
export default {
    state: {
       token: getToken()
    },
    mutations: {
       setToken(state)
    },
    actions: {
       
    }
}