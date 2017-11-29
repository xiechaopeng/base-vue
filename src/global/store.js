import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: {
    show: false,
    text: '加载中...',
    clientRect:''
  }
}

const getters = {}
const mutations = {
  showLoading (state, payload) {
    state.loading.show = true
    if (typeof payload === 'string') {
      state.loading.text = payload
    }
    if (typeof payload === 'object') {
      state.loading.text = payload.text
      state.loading.clientRect = payload.clientRect
    }
  },
  hideLoading (state) {
    state.loading.show = false
    state.loading.text = ''
    state.loading.clientRect = ''
  }
}
const actions = {}

const store = new Vuex.Store({
  strict: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
})
export default store