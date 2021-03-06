import Vue from 'vue'
import router from './router'
import store from './router'

import filters from './filters'
import directives from './directives'

export default {
  install(Vue) {
    Vue.use(filters)
    Vue.use(directives)
  },
  router,
  store
}