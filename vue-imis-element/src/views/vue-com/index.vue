<template>
  <div class="vue-com">
    <h1>vue组件化案例11</h1>
    <el-card :body-style="{ margin: '20px' }">
      <div class="item">props/$emit</div>
      <div class="item">$parent $childrent</div>
      <div class="item">$ref</div>
    </el-card>
    <div style="margin-top: 20px"></div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <m-parent></m-parent>
        </el-card>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import MParent from "./Parent.vue";

export default {
  name: "VueCom",
  components: {
    MParent,
  },
};
</script>

<style lang="less" scoped></style>
