<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-form"
    >
      <div class="title-container">
        <h1 class="title">vue-imis 后台管理系统登录</h1>
      </div>

      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="ruleForm.userName"
          type="userName"
          placeHolder="userName"
          autocomplete="on"
          ref="username"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="ruleForm.email"
          type="email"
          placeHolder="email"
          autocomplete="on"
          ref="email"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          ref="password"
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="Password"
        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
          placeholder="checkPass"
          @keyup.enter.native="submitForm('ruleForm')"
        ></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="ruleForm.agree">我已经阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" :loading="loginloading"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
// import { login, getUserInfo } from "@/api/user.js";

//
export default {
  name: 'Login',
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }

    let validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      }
      callback()
    }

    // 密码检查
    let validatePass = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('请输入密码'))
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    // 校验用户协议
    // 自定义校验规则
    // 验证通过callback
    // 验证失败 callback new Error(“错误消息”)
    let validateAgree = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('请同意用户协议'))
      }
    }
    return {
      loginloading: false,
      ruleForm: {
        password: '',
        checkPass: '',
        passwordType: 'password',
        userName: '',
        email: '',
        agree: false // 是否同意协议
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],

        agree: [
          {
            validator: validateAgree,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    /**
     *  配置Form表单验证
     * 1.必须给el-form 表单配置表单数据对象
     * 2.给需要验证的el-form-item绑定prop 属性 --->>> prop: 指定表单对象中的属性名称
     * 3.通过el-form 中的rule配置属性校验规则
     *
     * 4.手动触发表单验证：
     * 1.给el-form设置ref起名字，
     * 2.通过ref获取el-form组件，调用组件的valiate进行验证
     */
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          console.log('error submit!!')
          return false
        }
        this.loginloading = true
        const { userName, password, email } = this.ruleForm
        console.log(email, 'email')
        const { data } = await login({
          userName,
          password,
          email
        })
        const { code, msg, user } = data
        window.localStorage.setItem('user', JSON.stringify(user))

        if (code === '0') {
          this.loginloading = false
          this.$message({
            message: `${msg}, ${user.userName}`,
            type: 'success'
          })

          window.localStorage.setItem('username', user.userName)

          this.$store.commit('clearMenu')
          this.$store.commit('setToken', user.token)
          // this.$store.commit("setMenu", menu);
          //   // this.$store.commit("addMenu", this.$router);
          //   // 路由跳转
          this.$router.push('/')

          this.$router.push({
            name: 'index'
          })
        } else {
          this.loginloading = false
          this.this.$message.error(`${msg}`)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url('./background-login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
        color: #69ab9f;
      }
    }
  }
}
</style>
