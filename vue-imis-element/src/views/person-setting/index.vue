<template>
  <div class="person-container">
    <el-card>
      <div slot="header">个人设置</div>
      <el-row :gutter="10">
        <el-col :span="14">
          <el-form
            :model="rulePersonForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="编号" prop="_id">
              <el-input v-model="rulePersonForm._id" size="small"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="rulePersonForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="email" prop="email">
              <el-input v-model="rulePersonForm.email"></el-input>
            </el-form-item>
            <el-form-item label="用户头像" prop="img">
              <el-input v-model="rulePersonForm.img"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')"
                >立即创建</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
            <el-avatar shape="square" :size="300" fit="contain" :src="url"></el-avatar>
            <p>点击修改头像</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PersonSetting",
  data() {
    return {
      url: "http://localhost:3000/my-uploads/yan30.jpeg",
      rulePersonForm: {
        _id: "",
        userName: "",
        img: "",
        email: "",
      },
      rules: {
        userNamename: [
          { required: true, message: "用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        img: [
          { required: true, message: "用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        email: [
          { required: true, message: "用户邮箱", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped></style>
