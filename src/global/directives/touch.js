const Hammer = require('hammerjs')
function touch(el, binding) {
  let key = 'tap'
  for (const o in binding.modifiers) {
    if (binding.modifiers.hasOwnProperty(o)) {
      key = o
    }
  }
  let hammertime = new Hammer(el, {})
  if (key.indexOf('swipe') > -1) {
    let DIRECTION = {
      swipeup: 'DIRECTION_UP',
      swipedown: 'DIRECTION_DOWN',
      swipeleft: 'DIRECTION_LEFT',
      swiperight: 'DIRECTION_RIGHT'
    }
    hammertime.get('swipe').set({
      direction: Hammer[DIRECTION[key]]
    })
    hammertime.on('swipe', binding.value)
  } else {
    hammertime.on(key, binding.value)
  }
}

export default {
  install(Vue) {
    Vue.directive('touch', {
      inserted:touch,
      update:touch
    })
  }
}
