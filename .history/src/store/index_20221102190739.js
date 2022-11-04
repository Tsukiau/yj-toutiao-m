import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/user'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    async PostLogin (data) {
      const { data } = await login(data)
      console.log(data)
    } 
  },
  getters: {

  },
  modules: {

  }
})
