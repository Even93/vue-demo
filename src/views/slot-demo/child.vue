<template>
  <div>
      <h3 @click="setValue">子组件</h3>
    <!-- 1.默认插槽 -->
    <!-- <slot></slot>  -->
    <!-- 2.命名插槽 -->
    <!-- <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <slot name="pleacholder">插槽内部默认的内容，传递则覆盖</slot> -->
    <!-- 3.作用域插槽 -->
    <slot  :data="data"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
        data: ['大柴','二哈','三柯','四土','五萨',]
    };
  },
  created() {},
  mounted() {},
  methods: {
    setValue(){
      // 我要把值传给父组件
      var str='我要把值传给父组件'
      console.log(12323)
      this.$emit('getValue',str)
    }
  },
};
</script>

<style scoped lang="less">
</style>
