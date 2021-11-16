<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      class="app-nav-bar"
      @click-left="onClickLeft"
    />
    <!-- 登录表单 -->
    <van-form :show-error="false" :show-error-message="false" @submit="onSubmit" @failed="onFailed">
      <!-- <van-cell-group> -->
      <van-field
        v-model="user.mobile"
        label="请输入手机号"
        right-icon="warning-o"
        placeholder="请输入手机号"
        maxlength="11"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        maxlength="4"
        :rules="formRules.sms"
      >
        <template #button>
          <van-button size="small" type="primary" native-type="button" class="btn-sms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- </van-cell-group> -->
      <div style="margin: 26px 16px">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- 默认填写数据 -->
    <div class="defaut-info">
      <input type="textarea" v-model="defaultInfo.mobile" />
      <input type="textarea" v-model="defaultInfo.sms" />
    </div>
  </div>
</template>

<script>
import { login } from '../../api/user'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        // mobile: '',
        // sms: ''
        mobile: '',
        sms: '6666'
      },
      formRules: {
        mobile: [
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3|5|7|9]\d{9}$/, message: '手机号输入有误' }
        ],
        sms: [{ required: true, message: '请填写验证码' }]
      },
      defaultInfo: {
        mobile: '19888888888',
        sms: '6666'
      }
    }
  },
  methods: {
    async onSubmit(values) {
      console.log(values, 'values')
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true,
          duration: 0
        })
        const data = await login(this.user)
        this.$toast.success('登录成功')
        console.log(data, 'data')
        // console.log(this.$router)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
      }
    },
    onFailed(error) {
      console.log(error.errors, 'message')
      if (error.errors[0]) {
        // eslint-disable-next-line no-unused-expressions
        // this.$toast.error.errors[0].message
        console.log(error.errors[0].message, 'value')
      }
    },
    onClickLeft() {
      console.log('返回')
    },
    onClickRight() {
      console.log('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  .btn-sms {
    background-color: #ededed;
    color: #666;
  }
  .defaut-info {
    text-align: center;
  }
}
</style>
