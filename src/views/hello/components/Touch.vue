<template>
  <div v-touch="tap">
    tap me!
  </div>
</template>
<script>
export default {
  methods:{
    tap(e){
      console.log(e)
      alert(e.pointerType)
    }
  }
}
</script>

