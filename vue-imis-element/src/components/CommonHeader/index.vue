<template>
  <div class="header-container">
    <div class="header-left">
      <div class="toggle-button el-icon-s-fold" @click="toggleSide"></div>
      <header class="header-imis">welcome vue-imis</header>
    </div>
    <div class="header-user">
      <el-dropdown size="small" split-button type="primary">
        {{ "admin" }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <a href="https://github.com/xiaoguiking/vue-imis" target="_blank">
              项目仓库</a
            >
          </el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    toggleSide() {
      this.$emit("showSide");
    },

    loginOut() {
      console.log(1);
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    .toggle-button {
      cursor: pointer;
      padding-left: 5px;
      font-size: 20px;
    }
    .header-imis {
      display: inline-block;
      font-size: 14px;
      font-weight: 700;
      margin-left: 5px;
    }
  }

  .header-user {
    .header-user-title {
      color: #000;
      padding-right: 10px;
    }
    .signout {
      cursor: pointer;
    }
  }
}
</style>
