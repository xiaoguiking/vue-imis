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
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="user.phone"
          label="请输入手机号"
          right-icon="warning-o"
          placeholder="请输入手机号"
          maxlength="11"
        />
        <van-field
          v-model="user.code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          maxlength="4"
        >
          <template #button>
            <van-button size="small" type="primary" class="btn-sms"
              >发送验证码</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 26px 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '../../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        phone: '19888888888',
        code: '6666'
      }
    }
  },
  methods: {
    async onSubmit () {
      const data = await login(this.user)
      console.log(data, 'data')
    },
    onClickLeft () {
      console.log('返回')
    },
    onClickRight () {
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
}
</style>
