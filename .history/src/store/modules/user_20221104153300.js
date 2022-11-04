import { getToken, setToken } from '@/utils/Cookies'
import {login, getSms } from '@/api/user'


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
   async getLogin(context, data) {
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