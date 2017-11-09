let filters = {
  init(val) {
    return 'filter init'
  }
}
export default {
  install(Vue) {
    for (var key in filters) {
      Vue.filter(key, filters[key])
    }
  }
}
