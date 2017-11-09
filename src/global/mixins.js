export default {
  store_init: {
    created() {
      if (this.store && this.store.state && this.store.state.name) {
        let modulesMap = this.$store._modules.root._children
        let name = this.store.state.name
        // 如果modulesMap里面没有此模块名，说明是第一次加载，那么注册vuex的模块
        if (modulesMap[name] == undefined) {
          this.$store.registerModule(name, this.store)
        }
      }
    }
  }
}
