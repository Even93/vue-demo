<template>
  <el-container direction="vertical" class="my-container">
    <head-menu></head-menu>
    <el-container>
      <left-menu></left-menu>
      <el-main>
        <keep-alive >
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headMenu from './headMenu'
import leftMenu from './leftMenu'
export default {
  components: {
    headMenu,
    leftMenu
  }
  // name: "home",
  // props: {
  //   msg: String,
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
 .tabContainer.el-container.is-vertical{//低分辨率下会出现显示不全
      min-width:800px;
    }
  .tabContainer {
    box-sizing: border-box;
    padding: 20px;
    .el-tabs--border-card{
      border:none;
    }
    /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
      color:#4dc6a8 !important
    }
    /deep/.el-tabs--border-card>.el-tabs__content{
      padding:0
    }
    /deep/.el-tabs__nav-wrap{padding-left:0}
    .el-main{
      height: 100%;
      padding:10px 20px 0 20px;
      background-color: #fff;
    }

  }

}
</style>
