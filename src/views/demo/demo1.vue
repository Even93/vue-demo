<template>
  <div class="about">
    <h1 class="demo1">这是一段文字这是一段文字</h1>
    <div class="demo2"></div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
  .demo1{
    &:active{
      background-color: red;
    }
  }
</style>
