import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  mutations: {
    // 设置用户信息
    setUserInfo (state, userInfo) {
      state.userInfo = { ...userInfo }
    }
  },
  actions: {
/*     async PostLogin (data) {
      const { data } = await login(data)
      console.log(data)
    } */

  },
  getters: {

  },
  modules: {

  }
})
