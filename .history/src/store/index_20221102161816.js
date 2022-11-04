import Vue from 'vue'
import Vuex from 'vuex'
import { getSms, login } from '@/api/user'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userInfo: {} // 用户资料
  },
  mutations: {
    // 设置用户信息
    setUserInfo (state, userInfo) {
      state.userInfo = { ...userInfo }
    }
  },
  actions: {
    async getSms (context, mobile) {
      const { data } = await login(mobile)
      context.commit('setUserInfo', data) // 给mutations
    }

  },
  getters: {

  },
  modules: {

  }
})
