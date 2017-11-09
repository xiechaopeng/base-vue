import Vue from 'vue'
import Router from 'vue-router'
import hello from '../views/hello/router'
import NotFound from '../views/notFound/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/app/',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    ...hello,
    ...NotFound
  ]
})