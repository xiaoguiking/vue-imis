<template>
  <div class="header-container">
    <div class="header-left">
      <!-- <div :class="toggle-button el-icon-s-fold" @click="toggleSide"></div> -->
      <div class="toggle-button">
        <i
          :class="{
            'el-icon-s-fold': isCollapse,
            'el-icon-s-unfold': !isCollapse
          }"
          @click="toggleSide"
        >
        </i>
      </div>
      <!-- <div class="header-imis orange">welcome vue-imis-element</div> -->
      <!-- tag 标签导航 -->
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
      <!-- 全屏显示 -->
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen ? `取消全屏` : `全屏`" placement="bottom">
          全屏
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <!-- 消息标记 -->
      <el-badge :value="12" class="item" style="margin: 0 15px">
        <!-- <el-button size="mini">消息中心</el-button> -->
        <el-link type="primary" href="http://localhost:8096/#/admin/message_page">消息中心</el-link>
      </el-badge>
      <!-- 个人下拉展示 -->
      <el-dropdown size="small" split-button type="primary">
        {{ 'admin' }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <a href="https://github.com/xiaoguiking/vue-imis" target="_blank">项目仓库</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <!-- <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge> -->
          </el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CommonHeader',
  // props: ['is-collapse'],
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      fullscreen: false
    }
  },
  created() {},
  methods: {
    toggleSide() {
      this.$emit('showSide')
    },

    // 退出按钮
    loginOut() {
      window.localStorage.removeItem('username')
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      // location.reload();
      this.$message({
        message: `恭喜你，已经注销`,
        type: 'success'
      })
      this.$router.push('/login')
    },

    // 是否全屏
    handleFullScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen()
      }
      this.fullscreen = !this.fullscreen
    }
  },
  computed: {
    ...mapState({
      current: (state) => {
        // console.log(state.tab.currentMenu, "===========>menu");
        return state.tab.currentMenu
      }
    })
  }
}
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
    .btn-fullscreen {
      position: relative;
      width: 30px;
      height: 30px;
      text-align: center;
      border-radius: 15px;
      cursor: pointer;
      right: 10px;
      top: 5px;
      display: inline-block;
      color: white;
      font-size: 24px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
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
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff5722, 0 0 70px #ff5722,
      0 0 80px #ff5722, 0 0 100px #ff5722, 0 0 150px #ff5722;
  }
  from {
    filter: brightness(110%);
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff5722, 0 0 35px #ff5722,
      0 0 40px #ff5722, 0 0 50px #ff5722, 0 0 75px #ff5722;
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
.header-container {
  .el-badge__content.is-fixed {
    top: 10px;
    right: 20px;
  }
}
</style>
