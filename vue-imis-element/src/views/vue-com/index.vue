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
      <el-col :span="12">
        <el-card>
          <el-button type="success" @click="passMsg"
            >事件总线eventbus传值child</el-button
          >
          <m-parent></m-parent>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <m-father :message="a" :messageb="b" :messagec="c"></m-father>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MParent from "./Parent.vue";

// 事件总线
import bus from "@/utils/bus.js";

// atters
import MFather from "./Father";

export default {
  name: "VueCom",
  components: {
    MParent,
    MFather
  },
  data() {
    return {
      a: "消息a",
      b: "消息b",
      c: "消息c"
    };
  },
  methods: {
    passMsg() {
      bus.$emit("acceptMsg", "我是使用eventsbus传值");
    }
  }
};
</script>

<style lang="less" scoped></style>
