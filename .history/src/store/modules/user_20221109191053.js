import { getToken, setToken } from '@/utils/Cookies'
import {login } from '@/api/user'

const state = {
  token: getToken(),
  refresh_token: '',
  CHANNELS: JSON.parse(localStorage.getItem('CHANNELS'))
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },

  setRefresh_token(state, refresh_token) {
    state.refresh_token = refresh_token
    setToken(refresh_token)
  },

  setCHANNELS(state, data){
     state.CHANNELS = data
     localStorage.setItem('CHANNELS', JSON.stringify(data))
  }
}
const actions = {
   async getLogin(context, data) {
    const {refresh_token,token} = await login(data)
    context.commit('setToken',token)

  } 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}