import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  actions = {
    async getLogin(context, data) {
     const token = await login(data)
     console.log(token);
     return 123
   } 
   modules: {
     user
   }

})
