<template>
  <div class="header-container">
    <div
      class="toggle-button el-icon-s-fold"
      @click="toggleSide"
    ></div>
    <div class="header-user">
      <span class="header-title">欢迎：{{ "admin" }}</span>
      <span class="signout" @click="$router.push('/login')">
        退出
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    collapse: Boolean,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toggleSide () {
      this.$emit("showSide", )
    }
  },
  medthods: {

  },
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .toggle-button {
    cursor: pointer;
    padding-left: 5px;
    font-size: 20px;
  }
  .header-user {
    .header-title {
      color: #000;
      padding-right: 10px;
    }
    .signout {
      cursor: pointer;
    }
  }
}
</style>
