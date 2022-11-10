import { getToken, setToken } from '@/utils/Cookies'
import {login } from '@/api/user'

const state = {
  token: getToken(),
  CHANNELS: JSON.parse(localStorage.getItem('CHANNELS'))
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  setCHANNELS(state, data){
     state.CHANNELS = data
     localStorage.setItem('CHANNELS', JSON.stringify(data))
  }
}
const actions = {
   async getLogin(context, data) {
    const data = await login(data)
    console.log(data)
    context.commit('setToken',token)

  } 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}