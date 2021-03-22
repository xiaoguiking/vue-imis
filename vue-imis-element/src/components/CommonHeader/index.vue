<template>
  <div class="header-container">
    <span class="header-title">{{ "admin" }}</span>
    <span class="signout" @click="$router.push('/login')" v-if="collapse">
      退出
    </span>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    collapse: Boolean
  },
  data() {
    return {};
  }
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
