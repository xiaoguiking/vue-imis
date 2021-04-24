<template>
  <div class="header-container">
    <div class="header-left">
      <div class="toggle-button el-icon-s-fold" @click="toggleSide"></div>
      <div class="header-imis orange">welcome vue-imis-element</div>
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
    }
  }
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
      color: whitesmoke;
    }

    .orange {
      color: #ff5722;
    }
    .header-imis {
      display: inline-block;
      font-size: 20px;
      margin-left: 5px;
      cursor: pointer;

      &:hover {
        animation: orange 1.5s ease-in-out infinite alternate;
      }
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

@keyframes orange {
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722,
      0 0 70px #ff5722, 0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722,
      0 0 35px #ff5722, 0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
  }
}
</style>
