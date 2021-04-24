<template>
  <div>
    <h3>child</h3>
    <h5>{{ msg }}</h5>
    <el-button type="primary" @click="sendMsg">子传父</el-button>
    <el-button type="primary" @click="resetMsg">清除消息</el-button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  methods: {
    sendMsg() {
      this.$emit("showMsg", "I am from Child");
    },
    resetMsg() {
      this.$emit("clearMsg", "");
    },
  },
};
</script>

<style lang="less" scoped>
</style>