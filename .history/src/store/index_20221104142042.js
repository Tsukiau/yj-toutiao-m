import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '@/api/user'
import { user} from './modules/user'
Vue.use(Vuex)

const actions = {
  async PostLogin(_, data) {
    try {
      const { data } = await login(data)
      console.log(data.token)
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Vuex.Store({


})
