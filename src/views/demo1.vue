<template>
  <div class="about">
    <h3>1.computed计算属性</h3>
    <span @click="change">{{sum}}</span>
    <h3>2.更改日历框位置</h3>
    <el-date-picker popper-class="date-demo"></el-date-picker>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  data() {
    return {
      count: 1,
      obj: {},
      obj1: {},
    };
  },
  computed: {
    //非响应式数据
    sum() {
      return this.count + 1;
    },
  },
  mounted() {},
  methods: {
    change() {
      this.count = 2;
    },
    changeColor() {
      var box1 = document.getElementsByClassName("box1")[0];
      box1.style = "background-color:green";
    },
    // 100条香蕉，猴子离家50米，猴子每走一米要吃一根香蕉，猴子最大负重是50条香蕉。问猴子怎么做，可以做到拿回家香蕉最大化，最大可以拿到多少条回家【伪代码】
  },
};
</script>
<style lang="less" scoped>
</style>
<style>
.date-demo {
  left: 100px !important;
}
</style>