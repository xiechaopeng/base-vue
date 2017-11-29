import Vue from 'vue'
import App from './App'

//vue的全局资源filters、mixins、directives
import global from './global'
Vue.use(global)

//第三方插件库
import lib from './lib'
Vue.use(lib)

//个人的自定义css
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router:global.router,
  template: '<App/>',
  components: { App }
})
