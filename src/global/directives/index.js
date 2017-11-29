import focus from './focus'
import shadow from './shadow'
import color from './color'

export default {
  install(Vue) {
    Vue.use(focus)
    Vue.use(shadow)
    Vue.use(color,{test:{
      base:'#cccccc'
    }})
  }
}
