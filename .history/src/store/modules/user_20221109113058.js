import { getToken, setToken } from '@/utils/Cookies'
import {login } from '@/api/user'

const state = {
  token: getToken(),
  CHANNELS: 
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
    context.commit('setToken',token)

  } 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}