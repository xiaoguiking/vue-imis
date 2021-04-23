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

      <el-form-item label="密码" prop="password">
        <!-- <span class="svg-container">
            <svg-icon icon-class="password" />
          </span> -->
        <el-input
          ref="password"
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          placeholder="Password"
        ></el-input>
        <!-- <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span> -->
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
      <!-- <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item> -->
      <el-form-item prop="agree">
        <el-checkbox v-model="ruleForm.agree"
          >我已经阅读并同意用户协议和隐私条款</el-checkbox
        >
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          :loading="loginloading"
          >登录</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/user.js";

export default {
  name: "Login",
  data() {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error("年龄不能为空"));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error("请输入数字值"));
    //     } else {
    //       if (value < 18) {
    //         callback(new Error("必须年满18岁"));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };
    var validateUsername = (rule, value, callback) => {
      console.log("userName=================>", value);
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    // 密码检查
    var validatePass = (rule, value, callback) => {
      if (value) {
        callback();
      } else {
        callback(new Error("请输入密码"));
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 校验用户协议
    // 自定义校验规则
    // 验证通过callback
    // 验证失败 callback new Error(“错误消息”)
    var validateAgree = (rule, value, callback) => {
      if (value) {
        callback();
      } else {
        callback(new Error("请同意用户协议"));
      }
    };
    return {
      loginloading: false,
      ruleForm: {
        password: "",
        checkPass: "",
        passwordType: "password",
        userName: "",
        agree: false // 是否同意协议
        // age: "",
      },
      rules: {
        userName: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],

        agree: [
          {
            validator: validateAgree,
            trigger: "blur"
          }
        ]
        // age: [{ validator: checkAge, trigger: "blur" }],
      }
    };
  },
  mounted() {
    if (this.ruleForm.userName === "") {
      this.$refs.username.focus();
    } else if (this.mounted().password === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    // showPwd() {
    //   if (this.passwordType === "password") {
    //     this.passwordType = "";
    //   } else {
    //     this.passwordType = "password";
    //   }
    //   this.$nextTick(() => {
    //     this.$refs.password.focus();
    //   });
    // },

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
      let username = this.ruleForm.userName;
      let password = this.ruleForm.password;
      // var that = this;

      this.$refs[formName].validate(async valid => {
        if (!valid) {
          console.log("error submit!!");
          return false;
        }
        this.loginloading = true;

        // 解构学习
        // const {
        //   data: {
        //     data: { menu, message },
        //     code,
        //     type,
        //   },
        // } = await this.$axios.post("/api/permission/getMenu", {
        //   username,
        //   password,
        // });

        // 接口封装
        const {
          data: {
            data: { menu, message },
            code,
            type
          }
        } = await login({ username, password });

        console.log(menu, message, code, type, "数据");

        if (code === "20000") {
          this.loginloading = false;
          this.$message({
            message: `恭喜你，登录成功, vip: ${username}`,
            type: "success"
          });
          // 路由跳转
          // this.$router.push("/");
          this.$router.push({
            name: "index"
          });
        } else if (code === "-999") {
          this.loginloading = false;
          this.$message.error(`${message}`);
          return;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-image: url("./background-login.jpg");
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
