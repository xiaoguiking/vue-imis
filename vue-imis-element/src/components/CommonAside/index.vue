<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="rgb(48, 65, 86)"
      text-color="rgb(191, 203, 217)"
      active-text-color="#ffd04b"
      :collapse="collapse"
    >
      <el-submenu index="1">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { sideMenu } from "@/mock/menuList.js";

export default {
  name: "CommonAside",
  props: {
    collapse: Boolean,
  },
  data() {
    return {
      asideMenu: [],
    };
  },
  created() {
    this.asideMenu = sideMenu;
    console.log(this.asideMenu, "1");
  },
  mounted() {},
  computed: {
    name() {
      return this.data 
    }
  },
};

</script>

<style lang="less" scoped></style>
