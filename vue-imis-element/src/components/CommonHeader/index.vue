<template>
  <div class="header-container">
    <div class="header-left">
      <div class="toggle-button el-icon-s-fold" @click="toggleSide"></div>
      <!-- <div class="header-imis orange">welcome vue-imis-element</div> -->
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: current.path }" v-if="current">
            {{ current.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
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
import { mapState } from "vuex";
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
      window.localStorage.removeItem("username");
      this.$message({
        message: `恭喜你，已经注销`,
        type: "success"
      });
      this.$router.push("/login");
    }
  },
  computed: {
    ...mapState({
      current: state => {
        console.log(state.tab.currentMenu, "===========>menu");
        return state.tab.currentMenu;
      }
    })
  }
};
</script>

<style lang="less" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-left {
    display: flex;
    align-items: center;
    .toggle-button {
      cursor: pointer;
      padding-left: 5px;
      font-size: 20px;
      color: whitesmoke;
    }

    .breadcrumb {
      margin-left: 20px;
      color: #fff;
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

<style lang="less">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #fff;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}
</style>
