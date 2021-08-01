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
          <!-- 头像裁剪上传方式 -->
          <label for="file">
            <el-avatar
              shape="square"
              :size="300"
              fit="contain"
              :src="rulePersonForm.img"
            ></el-avatar>
            <p>点击修改头像</p>
          </label>
          <!-- 第一种方式 -->
          <!-- 第二种方式直接用label -->
          <!-- <p @click="$refs.file.click()" class="upload-file">点击修改头像</p> -->
          <input
            type="file"
            id="file"
            ref="file"
            hidden
            @change="onChangImage"
          />
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="修改头像"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <span>{{fileName}}</span>
      <img :src="previewImage" alt="头像图片" height="300px" width="300px">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user.js";

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
          { required: true, message: "用户头像", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "用户邮箱", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      dialogVisible: false, // 上传图片弹出框
      previewImage:[],  // 图片预览
      fileName: "",
    };
  },
  created() {
    this.loadUserInfo();
  },
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

    async loadUserInfo() {
      const { data } = await getUserInfo();
      console.log(data.user._id);
      this.rulePersonForm = data.user;
    },

    onChangImage() {
      console.log("change");
      const file = this.$refs.file;
      console.log(file.files[0], "file")
      this.fileName = file.files[0].name;
      const blobData = window.URL.createObjectURL(file.files[0])
      this.previewImage = blobData;
      this.dialogVisible = true;
      // 解决同一张图片无法重复上传问题
      this.$refs.file.value = "";
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((res) => {
          console.log(res)
          done();
        })
        .catch((err) => {
          console.log(err)
        });
    },
  },
};
</script>

<style lang="less" scoped>
label {
  cursor: pointer;
}
.upload-file {
  cursor: pointer;
}
</style>
