<template>
  <el-container class="home-container" style="height: 100%">
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '210px' : '50px'">
      <!-- 头部区域 -->
      <el-header>
        <common-header :collapse="isCollapse"></common-header>
      </el-header>
      <common-aside :collapse="isCollapse"></common-aside>
    </el-aside>
    <!-- 页面主题区域 -->
    <el-container>
      <div class="toggle-button el-icon-s-fold" @click="toggleMenu"></div>
      <!-- 右侧内容主题 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonAside from "@/components/CommonAside";
export default {
  name: "Main",
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    CommonHeader,
    CommonAside
  },
  methods: {
    toggleMenu() {
      console.log(this.isCollapse);
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: rgb(84, 92, 100);
}
.toggle-button {
  cursor: pointer;
  padding-left: 5px;
  font-size: 20px;
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
