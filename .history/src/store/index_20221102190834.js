import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/user'
Vue.use(Vuex)

const state = {

}
const mutations ={

}
const actions = {
  async PostLogin (data) {
    const { data } = await login(data)
    console.log(data)
  } 
}

export default new Vuex.Store({
  actions,
  mutations
   
})
