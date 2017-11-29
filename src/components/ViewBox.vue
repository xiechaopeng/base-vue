<template>
  <div class="col-flex-box" v-setHeight="fullHeight">
    <slot name="top">
    </slot>
    <div class="main">
      <div v-getParentHeight>
        <slot :height="mainHeight">
        </slot>
      </div>
    </div>
    <slot name="bottom">
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      fullHeight: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        mainHeight: ""
      }
    },
    directives: {
      setHeight(el, binding, vnode) {
        let vue = vnode.context
        let fullHeight = binding.value
        vue.$nextTick(() => {
          if (fullHeight) {
            el.style.height = "100vh"
          } else {
            let parentNode = el.parentNode
            if (parentNode) {
              el.style.height = parentNode.clientHeight + "px"
            } else {
              el.style.height = "100vh"
            }
          }
        })
      },
      getParentHeight(el, binding, vnode) {
        let vue = vnode.context
        vue.$nextTick(() => {
          let parentNode = el.parentNode
          vue.$nextTick(() => {
            if (parentNode) {
              el.style.height = parentNode.clientHeight + "px"
              vue.mainHeight = parentNode.clientHeight + "px"
              el.style.width = "100%"
              el.style.overflowX = "hidden"
              el.style.overflowY = "auto"
            }
          })
        })
      }
    }
  }
</script>

<style scoped>
  .col-flex-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    width: 100%
  }
  .main {
    flex: 1;
    width: 100%;
    overflow: hidden
  }
</style>

