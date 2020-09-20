<template>
  <div>
    <h3>flex布局</h3>
    <ul>
      <li v-for="(item,index) in flexData" :key="index" style="margin:10px 0">
        <span style="font-weight:700;margin-right:10px">{{item.name}}</span>
        <span style="color:#666">{{item.content}}</span>
      </li>
    </ul>
    <h3>骰子布局</h3>
    <div class="layout-container">
      <ul v-for="(item,index) in data" :key="index" :class="item.cls">
        <li v-for="(itemChild,indexChild) in item.val" :key="indexChild" class="item"></li>
      </ul>
      <!-- <ul class="second">
        <li v-for="(item,index) in 2" :key="index" class="item"></li>
      </ul>
      <ul class="third">
        <li v-for="(item,index) in 3" :key="index" class="item"></li>
      </ul>
      <ul class="fouth">
        <li v-for="(item,index) in 4" :key="index" class="item"></li>
      </ul>
      <ul class="five">
        <li v-for="(item,index) in 5" :key="index" class="item"></li>
      </ul>
      <ul class="six">
        <li v-for="(item,index) in 6" :key="index" class="item"></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        data:[
            {cls:'first',val:1},
            {cls:'second',val:2},
            {cls:'third',val:3},
            {cls:'fouth',val:4},
            {cls:'five',val:5},
            {cls:'six',val:6},
            ],
      flexData: [
        {
          name: "flex-direction",
          content:
            "改变主轴的方向，默认为 row 横向排列。属性包含 row  | row-reverse  |  column  | column-reverse",
        },
        {
          name: "flex-wrap",
          content: "控制元素换行。属性包含 nowrap | wrap | wrap-reverse",
        },
        {
          name: "align-content",
          content:
            "控制多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。属性包含  flex-start | flex-end | center | space-between | space-around | stretch",
        },
        {
          name: "justify-content",
          content:
            "控制在主轴上的对齐方式。属性包含 flex-start | flex-end | center | space-between | space-around",
        },
        {
          name: "align-items",
          content:
            "控制交叉轴上如何对齐。包含的属性有 flex-start | flex-end | center | baseline | stretch",
        },
        {
          name: "align-self",
          content:
            "属性允许单个项目有与其他项目不一样的对齐方式。包含的属性 auto | flex-start | flex-end | center | baseline | stretch",
        },
        {
          name: "order",
          content: " 属性控制元素的排列顺序，数值越小，排列越靠前。",
        },
        {
          name: "flex-grow ",
          content:
            "属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。",
        },
        {
          name: "flex-shrink",
          content:
            " 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。",
        },
        {
          name: "flex-basis ",
          content:
            "属性定义了项目占据主轴的空间，默认为 auto ，即元素本来大小。",
        },
        {
          name: "flex",
          content:
            "属性是flex-grow, flex-shrink 和 flex-basis 的简写，默认值为0 1 auto。",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
@bg: #333;
.box {
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  list-style-type: none;
  padding:0 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
}
.box-item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: @bg;
}
.layout-container {
    display: flex;
    justify-content: space-around;
  .first {
    display: flex;
    align-items: center;
    justify-content: center;
    .box;
    .item {
      .box-item;
    }
  }
  .second {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .box;
    .item {
      .box-item;
      &:last-child{
          align-self: flex-end;
      }
    }
  }
  .third {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .box;
    .item {
      .box-item;
      &:nth-child(2){
          align-self: center;
      }
       &:last-child{
          align-self: flex-end;
      }
    }
  }
  .fouth {
    display: flex;
    flex-wrap:wrap;
    align-content: space-between;
    .box;
    padding-top:10px;
    padding-bottom: 10px;
    .item {
      .box-item;
       &:nth-child(1){
          margin-right: 36px;
      }
      &:nth-child(3){
          margin-right: 36px;
      }
    }
  }
  .five {
    display: flex;
    flex-wrap:wrap;
    align-content: space-between;
    .box;
    padding-top:10px;
    padding-bottom: 10px;
    .item {
      .box-item;
       &:nth-child(1){
          margin-right: 36px;
      }
      &:nth-child(3){
          margin-right:28px;
          margin-left: 28px;

      }
      &:nth-child(4){
          margin-right: 36px;
      }
    }
  }
  .six {
    display: flex;
    flex-wrap:wrap;
    align-content: space-around;
    .box;
    .item {
      .box-item;
      &:nth-child(1){
          margin-right: 36px;
      }
      &:nth-child(3){
           margin-right: 36px;
      }
      &:nth-child(5){
          margin-right: 36px;
      }
    }
  }

}
</style>
