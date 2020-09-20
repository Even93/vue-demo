<template>
  <div>
      <h2 class="father">父组件</h2>
    <!-- <child>默认插槽内容</child> -->
    <!-- <child>
             默认插槽内容
            <template>
                <div slot="header">
                    header插槽内容也可以包含标签
                    <div class="box1"></div>
                </div>
            </template>
            <template>
                <div slot="footer">
                    footer插槽内容
                </div>
            </template>
            <template>
                <div slot="pleacholder">
                   覆盖
                </div>
            </template>
    </child> -->
    <!--第一次使用：用flex展示数据-->
    <child>
     <template slot-scope="user">
        <div class="tmpl">
          <span v-for="(item,index) in user.data" :key='index'>{{item}}&nbsp</span>
        </div>
      </template>
    </child>
     <!--第二次使用：用列表展示数据-->
     <child>
      <template slot-scope="user">
        <ul>
          <li v-for="(item,index) in user.data" :key='index'>{{item}}</li>
        </ul>
      </template>

    </child>
     <!--第三次使用：直接显示数据-->
    <child>
      <template slot-scope="user">
       {{user.data}}
      </template>

    </child>
     <!--第四次使用：不使用其提供的数据, 作用域插槽退变成匿名插槽-->
    <child @getValue='getValue'>
      我就是模板
    </child>
  </div>
</template>

<script>
import child from "./child";
export default {
  components: {
    child,
  },
  data() {
    return {
        todos:[]
    };
  },
  created() {},
  mounted() {},
  methods: {
    getValue(val){
      console.log('这里是获取到子组件的值',val)
    }
  },
};
</script>

<style scoped lang="less">
@bgc: blue;
@skybl:skyblue;
.father{
    background-color: @skybl;
}
.box1 {
  width: 100px;
  height: 100px;
  background-color: @bgc;
}
</style>
