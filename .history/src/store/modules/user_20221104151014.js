import { getToken, setToken } from '@/utils/Cookies'
import { login } from '@/api/user'

const state = {
  token: getToken()
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  }
},
const actions = {
  async login(context, data) {
    const token = await login(data)
    console.log(token);
  }
}
export default {
  state,
  mutations,
  actions

}