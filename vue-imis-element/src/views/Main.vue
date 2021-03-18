<template>
  <el-container class="home-container" style="height: 100%">
    <!-- 侧边栏 -->
    <el-aside width="210px">
      <!-- 头部区域 -->
      <el-header>
        <common-header></common-header>
      </el-header>
      <common-aside :collapse="isCollapse"></common-aside>
    </el-aside>
    <!-- 页面主题区域 -->
    <el-container>
      <div class="toggle-button" @click="toggleMenu">|||</div>
      <!-- 右侧内容主题 -->
      <el-main>Main</el-main>
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
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: rgb(84, 92, 100);
}
.toggle-button {
  cursor: pointer;
  padding-left: 5px;
}
</style>
