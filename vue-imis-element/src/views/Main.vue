<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '210px' : '50px'">
      <!-- <el-aside width="auto"> -->
      <!-- <common-aside :is-collapse="isCollapse"></common-aside> -->
      <common-aside></common-aside>
    </el-aside>
    <!-- 页面主题区域 -->
    <el-container :class="isCollapse ? 'common-container' : 'container-active'">
      <!-- <el-container :class=[{containeractive:isCollapse},commonContainer]> -->
      <!-- 头部区域 -->
      <el-header style="height: 40px">
        <common-header @showSide="handleSide"></common-header>
      </el-header>
      <!-- 右侧内容主题 -->
      <v-tags></v-tags>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonAside from "@/components/CommonAside";
import vTags from "@/components/Tags";

export default {
  name: "Main",
  data() {
    return {
      isCollapse: false,
      // 数组对象控制css
      // containerActive: "container-active",
      commonContainer: "common-container"
    };
  },
  components: {
    CommonHeader,
    CommonAside,
    vTags
  },
  methods: {
    handleSide() {
      console.log("子调父方法");
      this.isCollapse = !this.isCollapse;
    }
  }
};
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
  // position: relative;
  position: sticky;
  top: 0px;
  z-index: 999;
  background-color: #304156;
  // -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  // box-shadow: 1px 2px 10px #7a7575;
  line-height: 40px;
}

.el-aside {
  transition: width 0.28s;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow-y: scroll;
}

.common-container {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.2s;
  margin-left: 210px;
  position: relative;
  overflow: hidden;
}
.container-active {
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 60px;
}
.el-main {
  overflow: visible;
  background: #f0f0f0;
  padding: 0;
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
    margin: -50px;
  }
}
</style>
