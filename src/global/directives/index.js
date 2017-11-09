import focus from './focus'
import touch from './touch'
import shadow from './shadow'
import color from './color'

export default {
  install(Vue) {
    Vue.use(focus)
    Vue.use(touch)
    Vue.use(shadow)
    Vue.use(color,{test:{
      base:'#cccccc'
    }})
  }
}
