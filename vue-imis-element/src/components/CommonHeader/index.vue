<template>
  <div class="header-container">
    <span class="header-title">欢迎：{{ "admin" }}</span>
    <span class="signout" @click="$router.push('/login')">
      退出
    </span>
  </div>
</template>

<script>
export default {
  name: "CommonHeader"
};
</script>

<style lang="less" scoped>
.header-container {
  .header-title {
    color: whitesmoke;
    padding-right: 10px;
  }
  .signout {
    cursor: pointer;
  }
}
</style>
