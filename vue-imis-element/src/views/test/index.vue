<template>
  <div class="test--page">
    测试页面
    <el-button type="primary" @click="open1('456')">点击我查看路由</el-button>

    <router-link to="/test/log" tag="button">登录</router-link>
    <router-link to="/test/res" tag="button">注册</router-link>
    <hr />
    <Log v-if="this.$route.path === '/test/log'"></Log>
    <Res v-if="this.$route.path === '/test/res'"></Res>
  </div>
</template>

<script>
import Log from "@/views/test/Log";
import Res from "@/views/test/Res";
export default {
  name: "test",
  data() {
    return {
      routervalue: "",
      log: ""
    };
  },
  components: {
    Log,
    Res
  },
  methods: {
    open1(id) {
      // 页面刷新数据不会丢失 1
      // let id = 123;
      // this.$router.push({
      //   path: `/test/${id}`
      // });

      // ===========>>> 页面刷新数据会丢失2
      // this.$router.push({
      //   name: "user", // ==========> 注意是name
      //   params: {
      //     id: id
      //   }
      // });

      // path匹配 刷新不会丢失
      this.$router.push({
        path: "/user",
        query: {
          id: id
        }
      });

      this.$notify({
        title: "提示",
        message: `这是一条不会自动关闭的消息, ${this.$router.path}`
      });
    },
    getPath() {
      // console.log(this.$route.path);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      console.log(this.$route.path);
      if (newVal === "/test/log") {
        console.log("欢迎进入登录页面");
      }
      if (newVal === "/test/res") {
        console.log("欢迎进入注册页面");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.test {
  color: chocolate;
}
</style>
