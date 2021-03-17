<template>
  <div>
    <h1>动态路由参数path</h1>
    <el-button type="primary" @click="open" v-model="par">{{
      par || "id"
    }}</el-button>
    <p>{{ par }}</p>
    <h1>动态参数query</h1>
    <p>{{ this.$route.query.id }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    // let id = this.$router;
    return {
      par: ""
    };
  },
  methods: {
    open() {
      console.log(this.$route, "==========user route=======>");
      this.par = this.$route.params.id;
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.path, from.path, "=========================>");
    }
  }
};
</script>

<style lang="less" scoped></style>
