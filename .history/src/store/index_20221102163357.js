import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/user'
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
    async PostLogin (state,data ) {
      const { data } = await login(data)
      console.log(data)
    }

  },
  getters: {

  },
  modules: {

  }
})
