import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'

// 导入全局的样式文件
import './css/index.css'
Vue.use(Vant)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
