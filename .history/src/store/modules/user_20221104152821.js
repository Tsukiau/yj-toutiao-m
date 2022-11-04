import { getToken, setToken } from '@/utils/Cookies'


const state = {
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  }
}
const actions = {
   async login(context, data) {
    const token = await login(data)
    console.log(token);
    return 123
  } 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}