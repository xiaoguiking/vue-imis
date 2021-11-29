<template>
  <div class="my-container">
    <!-- 已经登录 -->
    <van-cell-group v-if="userInfo" class="my-info">
      <van-cell title="昵称" value="昵称" center class="base-info" :border="false">
        <van-image round class="avatar" slot="icon" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <div slot="title">昵称</div>
        <van-button type="primary" size="mini" round class="update-btn">编辑资料</van-button>
      </van-cell>
      <van-grid :border="false" class="data-info">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <span class="count">739</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <span class="count">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <span class="count">4900</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <span class="count">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 未登录 -->
    <div class="not-login" v-else>
      <van-grid :column-num="2" class="nav-grid nav-grid-login">
        <van-grid-item
          icon="browsing-history-o"
          text="登录/注册"
          class="nav-grid-item"
          @click="goLogin"
        />
      </van-grid>
    </div>
    <van-grid :column-num="2" class="nav-grid">
      <van-grid-item icon="star-o" text="收藏" class="nav-grid-item" />
      <van-grid-item icon="browsing-history-o" text="历史" class="nav-grid-item" />
    </van-grid>
    <van-cell title="消息通知" is-link url="/vant/mobile.html" />
    <van-cell title="小爱同学" is-link to="index" />
    <van-cell title="退出登录" class="login-out" v-if="userInfo" @click="loginOut" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'my',
  methods: {
    goLogin() {
      this.$router.push('/login')
    },
    loginOut() {
      this.$dialog
        .confirm({
          title: '退出登录',
          message: '是否退出登录',
          theme: 'round-button'
        })
        .then(() => {
          // on confirm
          this.$store.commit('removeUserInfo')
          this.$router.push('/login')
        })
        .catch((value) => {
          // on cancel
          console.log(value)
        })
    }
  },
  computed: {
    // 箭头函数拿到数据
    ...mapState({
      userInfo: (state) => state.userInfo
    }),
    ...mapGetters(['getStore'])
  }
}
</script>

<style lang="less">
.my-container {
  // 登录
  .my-info {
    background: url('../../assets/img/banner.jpg') no-repeat;
    // opacity: 0.9;
    background-size: cover;
    .base-info {
      background: unset;
      height: 115px;
      color: #fff;
      font-size: 15px;
      padding-top: 38px;
      padding-bottom: 18px;
      box-sizing: border-box;
    }
    .avatar {
      width: 66px;
      height: 66px;
      border: 1px solid #fff;
      box-sizing: border-box;
      margin-right: 10px;
    }
    .update-btn {
      font-size: 10px;
      color: #666;
      height: 18px;
    }
    .data-info {
      .van-grid-item__content {
        background-color: unset;
      }
      .data-info-item {
        height: 65px;
        color: #fff;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
  }
  // 未登录
  .not-login {
    background: url('../../assets/img/banner.jpg') no-repeat;
    background-size: cover;
    height: 170px;
    .nav-grid-login {
      justify-content: center;
      transform: translateY(50%);
      /deep/.van-hairline--top::after {
        border-top-width: 0;
      }
      .van-grid-item__content {
        background-color: unset;
        font-size: 14px;
        .van-grid-item__text {
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
  .nav-grid {
    .nav-grid-item {
      height: 70px;
      .van-icon {
        font-size: 22px;
        &:hover {
          color: #2b78c5;
        }
      }
      .van-icon-star-o {
        color: #eb5253;
      }
      .van-icon-browsing-history-o {
        color: #ff9d1d;
      }
    }
  }
  .login-out {
    text-align: center;
    color: #d86262;
  }
}
</style>
