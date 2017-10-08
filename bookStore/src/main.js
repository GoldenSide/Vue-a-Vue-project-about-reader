// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入功能插件
import axios from 'axios'
import store from './store/index'
import MintUi from 'mint-ui'
import Common from './assets/js/utils.js'


// 导入相关的样式
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'

// 将相关的插件挂在vue下面
Vue.use(Common)
Vue.use(MintUi)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
