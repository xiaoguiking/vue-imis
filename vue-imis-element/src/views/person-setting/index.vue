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
            @change="onChangImage($event)"
          />
        </el-col>
      </el-row>
    </el-card>
    <div class="dialog-cover-fix">
      <el-dialog
        title="修改头像"
        :visible.sync="dialogVisible"
        width="80%"
        :before-close="handleClose"
        @opened="onDialogImg"
        class="cropper-content"
      >
        <div class="cropper-box">
          <div class="privew-image-wrap" style="text-align: center">
            <vueCropper
              ref="cropper"
              :img="option.previewImage"
              :outputSize="option.size"
              :outputType="option.outputType"
              :info="true"
              :canScale="option.canScale"
              :autoCrop="option.autoCrop"
              :autoCropWidth="option.autoCropWidth"
              :autoCropHeight="option.autoCropHeight"
              :fixed="option.fixed"
              :fixedNumber="option.fixedNumber"
              :full="option.full"
              :fixedBox="option.fixedBox"
              :canMove="option.canMove"
              :canMoveBox="option.canMoveBox"
              :original="option.original"
              :centerBox="option.centerBox"
              :height="option.height"
              :infoTrue="option.infoTrue"
              :mode="option.mode"
              @realTime="realTime"
              @imgLoad="imgLoad"
            ></vueCropper>
          </div>
          <!--底部操作工具按钮-->
          <div class="footer-btn">
            <div class="scope-btn">
              <label class="label-btn el-button--small" for="uploads"
                >选择封面</label
              >
              <input
                type="file"
                id="uploads"
                style="position: absolute; clip: rect(0 0 0 0)"
                accept="image/png, image/jpeg, image/gif, image/jpg"
                @change="onChangImage($event)"
              />
              <el-button
                size="mini"
                type="danger"
                plain
                icon="el-icon-zoom-in"
                @click="changeScale(1)"
                >放大</el-button
              >
              <el-button
                size="mini"
                type="danger"
                plain
                icon="el-icon-zoom-out"
                @click="changeScale(-1)"
                >缩小</el-button
              >
              <el-button size="mini" type="danger" plain @click="rotateLeft"
                >↺ 左旋转</el-button
              >
              <el-button size="mini" type="danger" plain @click="rotateRight"
                >↻ 右旋转</el-button
              >
            </div>
            <div class="upload-btn">
              <el-button size="mini" type="success" @click="uploadImg('blob')"
                >上传封面 <i class="el-icon-upload"></i
              ></el-button>
            </div>
          </div>
        </div>
        <!--预览效果图-->
        <div class="show-preview">
          <div :style="previews.div" class="preview">
            <img :src="previews.url" :style="previews.img" />
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user.js";
import { VueCropper } from "vue-cropper";

export default {
  name: "PersonSetting",
  data() {
    return {
      url: "http://localhost:3000/my-uploads/yan30.jpeg",
      rulePersonForm: {
        _id: "",
        userName: "",
        img: "",
        email: ""
      },
      rules: {
        userNamename: [
          { required: true, message: "用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        img: [
          { required: true, message: "用户头像", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur"
          }
        ],
        email: [
          { required: true, message: "用户邮箱", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      dialogVisible: false, // 上传图片弹出框
      // previewImage: [], // 图片预览
      fileName: "", // 头像名称
      // 裁剪组件的基础配置option
      option: {
        previewImage: "", //裁剪图片的地址
        outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
        outputType: "jpeg", //裁剪生成图片的格式（jpeg || png || webp）
        info: true, //图片大小信息
        canScale: true, //图片是否允许滚轮缩放
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 230, //默认生成截图框宽度
        autoCropHeight: 200, //默认生成截图框高度
        fixed: true, //是否开启截图框宽高固定比例
        fixedNumber: [1.53, 1], //截图框的宽高比例
        full: false, //false按原比例裁切图片，不失真
        fixedBox: false, //固定截图框大小，不允许改变
        canMove: false, //上传图片是否可以移动
        canMoveBox: true, //截图框能否拖动
        original: false, //上传图片按照原始比例渲染
        centerBox: false, //截图框是否被限制在图片里面
        height: true, //是否按照设备的dpr 输出等比例图片
        infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
        maxImgSize: 3000, //限制图片最大宽度和高度
        enlarge: 1, //图片根据截图框输出比例倍数
        mode: "100% auto" //图片默认渲染方式
      },
      previews: {}
    };
  },
  created() {
    this.loadUserInfo();
  },
  mounted() {},
  components: {
    VueCropper
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
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

    getObjectURL(file) {
      // this.limitUpload(file)
      let url = null;
      if (window.createObjectURL !== undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.URL !== undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL !== undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      }
      return url;
    },

    onChangImage(e) {
      let file = e.target.files[0];
      console.log(e.target.value);
      if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        this.$message({
          message: "图片类型要求：jpeg、jpg、png",
          type: "error"
        });
        return false;
      }

      this.fileName = file.name;

      this.$nextTick(() => {
        //转化为blob
        let reader = new FileReader();
        reader.onload = e => {
          let data;
          if (typeof e.target.result === "object") {
            data = this.getObjectURL(new Blob([e.target.result]));
          } else {
            data = e.target.result;
          }
          this.option.previewImage = data;
        };
        //转化为base64
        reader.readAsDataURL(file);

        console.log(this.option.previewImage);
        this.dialogVisible = true;
        // 解决同一张图片无法重复上传问题
        this.$refs.file.value = "";
      });
    },

    imgLoad(msg) {
      console.log("imgLoad");
      console.log(msg);
    },
    //图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //向左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    //向右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    //实时预览函数
    realTime(data) {
      console.log(data, "实时预览");
      this.previews = data;
    },

    // 上传封面
    uploadImg(type) {
      let _this = this;
      console.log(type, _this, "this=========>");
      if (type === "blob") {
        //获取截图的blob数据
        this.$refs.cropper.getCropBlob(async data => {
          let formData = new FormData();
          formData.append("file", data, "DX.jpg");
          //调用axios上传
          let { data: res } = await _this.$http.post(
            "/api/file/imgUpload",
            formData
          );
          if (res.code === 200) {
            _this.$message({
              message: res.msg,
              type: "success"
            });
            let data = res.data
              .replace("[", "")
              .replace("]", "")
              .split(",");
            let imgInfo = {
              name: _this.Name,
              url: data[0]
            };
            _this.$emit("uploadImgSuccess", imgInfo);
          } else {
            _this.$message({
              message: "文件服务异常，请联系管理员！",
              type: "error"
            });
          }
        });
      }
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(res => {
          console.log(res);
          done();
        })
        .catch(err => {
          console.log(err);
        });
    },

    onDialogImg() {}
  }
};
</script>

<style lang="less" scoped>
label {
  cursor: pointer;
}
.upload-file {
  cursor: pointer;
}
.cropper-content {
  display: flex;

  .cropper-box {
    .privew-image-wrap {
      width: auto;
      height: 300px;
    }

    .footer-btn {
      margin-top: 20px;
      display: flex;
      .label-btn {
        outline: none;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: 0;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        font-weight: 500;
        padding: 8px 15px;
        font-size: 12px;
        border-radius: 3px;
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        margin-right: 10px;
      }

      .upload-btn {
        margin-left: 10px;
      }
    }
  }

  .show-preview {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    .preview {
      overflow: hidden;
      border: 1px solid #67c23a;
      background: #cccccc;
    }
  }
}
</style>

// 正确修改element组件样式
<style scoped>
.dialog-cover-fix >>> .el-dialog__body {
  display: flex;
  flex: 1;
}
</style>
