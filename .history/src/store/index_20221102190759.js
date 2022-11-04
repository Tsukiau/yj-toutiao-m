import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/user'
Vue.use(Vuex)

const state = {

}







export default new Vuex.Store({

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
