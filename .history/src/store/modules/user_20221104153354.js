import { getToken, setToken } from '@/utils/Cookies'
import {login } from '@/api/user'

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
    const {token} = await login(data)
    

  } 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}