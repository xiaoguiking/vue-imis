<template>
  <div class="login-copy">
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-button type="primary" @click="handleClickBtn">点击提交</el-button>
  </div>
</template>

<script>
export default {
  name: "LoginCopy",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    handleClickBtn() {
      const username = this.username.trim();
      if (this.username.length < 4) {
        this.$message({
          message: "用户名不能小于4位",
          type: "warning"
        });
        return;
      }
      localStorage.setItem("username", username);
      this.$router.push("/chatroom");
    }
  }
};
</script>

<style lang="less" scoped>
.login-copy {
  width: 500px;
  display: flex;
}
</style>
