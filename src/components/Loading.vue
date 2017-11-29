<template>
  <div class="loading" v-if="option.show" v-setHeight>
    <div class="main">
      <img src="/static/puff.svg">
      <div v-if="option.text">
        {{option.text}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      option() {
        return this.$store.state.loading
      }
    },
    directives: {
      setHeight(el, binding, vnode) {
        let vue = vnode.context
        let clientRect = vue.option.clientRect
        vue.$nextTick(() => {
          if (clientRect) {
            let height = clientRect.height
            if (clientRect.height<el.clientHeight) {
              height = el.clientHeight
            }
            el.style.height = height + "px"
            el.style.width = clientRect.width + "px"
            el.style.top = clientRect.top + "px"
            el.style.left = clientRect.left + "px"
          } else {
            el.style.height = '100vh'
            el.style.width = '100vw'
            el.style.top = 0
            el.style.left = 0
          }
        })
      }
    }
  }
</script>

<style scoped>
  .loading {
    width: 100vw;
    /* height: 100vh; */
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    color: #03A9F4;
    z-index: 999;
    font-size: 12px;
    background: rgba(255, 255, 255, .8)
  }
  .main {
    position: relative;
    top: 50%;
    transform: translateY(-50%)
  }
  .loading img {
    border-radius: 50%;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px rgba(0, 0, 0, .14), 0 1px 18px rgba(0, 0, 0, .12);
    margin-bottom: 10px;
    background: #fff
  }
</style>

