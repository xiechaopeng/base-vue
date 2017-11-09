import Vue from 'vue'
import App from './App'
//路由
import router from './global/router'
//vue的全局资源filters、mixins、directives
import global from './global'
//第三方插件库
import lib from './lib'
//个人的自定义css
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
