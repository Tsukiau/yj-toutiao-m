import Vue from 'vue'
import Vuex from 'vuex'
import { sms } from '@/api/user'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
    async getSms(mobile) {
      const { data } = await sms(mobile)
    }

  },
  getters: {

  },
  modules: {

  }
})
