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

      <el-form-item label="密码" prop="pass">
        <!-- <span class="svg-container">
            <svg-icon icon-class="password" />
          </span> -->
        <el-input
          ref="password"
          type="password"
          v-model="ruleForm.pass"
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
export default {
  name: "login",
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
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          this.$refs.ruleForm.validateField("password");
        }
        callback();
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
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        passwordType: "password",
        userName: "",
        password: "",
        loginloading: false,
        // age: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: validateUsername, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        // age: [{ validator: checkAge, trigger: "blur" }],
      },
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
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    submitForm(formName) {
      let username = this.ruleForm.userName;
      let password = this.ruleForm.password;
      // var that = this;

      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          console.log("error submit!!");
          return false;
        }
        this.loginloading = true;
        const { data } = await this.$axios.post("/api/permission/getMenu", {
          username,
          password,
        });

        let { code, ...rest } = data;
        console.log(code, "code");
        if (code === "20000") {
          console.log("success");
          this.loginloading = false;
          this.$message({
            message: `恭喜你，登录成功, vip: ${username}`,
            type: "success",
          });
        } else if (code === "-999") {
          this.loginloading = false;
          this.$message.error(`${rest.data.message}`);
          return;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
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
