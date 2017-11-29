<template>
  <div>
    <loading></loading>
    <router-view/>
  </div>
</template>

<script>
import loading from '@/components/Loading'
export default {
  name: 'app',
  components:{
    loading
  }
}
</script>

<style>

</style>
