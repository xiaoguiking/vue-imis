<template>
  <div>
    <el-button type="success" @click="backup">返回上一页</el-button>
    <p>动态路由参数path</p>
    <el-button type="primary" @click="open" v-model="par">{{
      par || "id"
    }}</el-button>
    <p>{{ par }}</p>
    <p>动态参数query</p>
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
    },
    // 返回上一级方式
    backup() {
      console.log(this.$router, "==========backup1====>");
      // history.go(-1)
      this.$router.go(-1);
      // 返回上一级
      // history.back(-1)
      // window.history.back();
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
