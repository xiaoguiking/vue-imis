<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside class="aside" width="auto">
      <common-aside class="aside-menu" :is-collapse="isCollapse"></common-aside>
    </el-aside>
    <!-- 页面主题区域 -->
    <el-container :class="isCollapse ? 'common-container' : 'container-active'">
      <!-- 头部区域 -->
      <el-header style="height: 40px">
        <common-header @showSide="handleSide" :is-collapse="isCollapse"></common-header>
      </el-header>
      <common-tab></common-tab>
      <!-- 右侧内容主题 -->
      <el-main>
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonAside from '@/components/CommonAside'
import CommonTab from '@/components/CommonTab'

export default {
  name: 'Main',
  data() {
    return {
      isCollapse: false, // 当前侧边栏的状态显示
      // 数组对象控制css
      // containerActive: "container-active",
      commonContainer: 'common-container'
    }
  },
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  },
  methods: {
    handleSide() {
      console.log('子调父方法')
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
/*
sticky属性仅在以下几个条件都满足时有效：

父元素不能overflow:hidden或者overflow:auto属性，或者body height:100%
必须指定top、bottom、left、right4个值之一，否则只会处于相对定位
父元素的高度不能低于sticky元素的高度

*/

.el-header {
  overflow: hidden;
  position: sticky;
  top: 0px;
  z-index: 999;
  background-color: #304156;
  // -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  // box-shadow: 1px 2px 10px #7a7575;
  line-height: 40px;
}

.common-container {
  min-height: 100%;
  -webkit-transition: margin-left 0.4s;
  transition: margin-left 0.4s;
  margin-left: 64px;
  position: relative;
  overflow: hidden;
}
.container-active {
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 180px;
  overflow: hidden;
}
.el-main {
  overflow: visible;
  background: #f0f0f0;
  padding: 0;
  height: 100%;
  // height: 100vh;
}
.aside {
  // position: fixed;
  // top: 0;
  .aside-menu {
    // height: 100%;
  }
}
.el-footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: forestgreen;
}
@keyframes sideNav {
  0% {
    width: 300px;
    height: 300px;
    margin: 0;
  }
  100% {
    width: 400px;
    height: 400px;
    margin: -60px;
  }
}
</style>
