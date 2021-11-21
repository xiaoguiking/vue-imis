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
    <van-form
      :show-error="false"
      :show-error-message="false"
      @submit="onSubmit"
      @failed="onFailed"
      ref="login-form"
    >
      <!-- <van-cell-group> -->
      <van-field
        v-model="user.mobile"
        label="请输入手机号"
        name="mobile"
        right-icon="warning-o"
        placeholder="请输入手机号"
        maxlength="11"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.sms"
        name="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
        maxlength="4"
        :rules="formRules.sms"
      >
        <template #button>
          <van-count-down
            :time="1000 * 5"
            v-if="isCountDown"
            format="ss 秒"
            @finish="isCountDown = false"
          />
          <van-button
            :loading="isSendSmsLoading"
            size="small"
            type="button"
            @click.prevent="onSubmitSms"
            class="btn-sms"
            v-else
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
import { getSms, login } from '../../api/user'

export default {
  name: 'Login',
  data() {
    return {
      user: {
        // mobile: '',
        // sms: ''
        mobile: '',
        sms: ''
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
        sms: ''
      },
      isCountDown: false,
      isSendSmsLoading: false
    }
  },
  methods: {
    // 提交登录表单
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
        console.log(data)
        this.$store.commit('saveUserInfo', data)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.$toast.fail('登录失败')
      }
    },

    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },

    // TODO 验证码校验
    async onSubmitSms() {
      try {
        // 校验手机号
        await this.$refs['login-form'].validate('mobile')
        this.isSendSmsLoading = true
        const {
          data: { sms }
        } = await getSms(this.user.mobile)
        console.log(sms, 'sms')
        this.user.sms = sms

        this.isCountDown = true
      } catch (error) {
        // todo 处理发送频繁逻辑
        this.$toast({
          message: error.message,
          position: 'top'
        })
      }
      this.isSendSmsLoading = false
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
