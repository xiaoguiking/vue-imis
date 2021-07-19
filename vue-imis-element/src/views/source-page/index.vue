<template>
  <div class="image-container">
    <el-card>
      <div slot="header">素材管理</div>
      <div style="padding-bottom: 10px" class="image-control">
        <el-radio-group v-model="collect" @change="onChangeCollect">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <el-button type="success" @click="dialogUpload = true"
          >上次素材</el-button
        >
      </div>
      <!-- 素材列表 -->
      <el-row :gutter="20">
        <el-col
          :lg="4"
          :md="6"
          :sm="6"
          :xs="12"
          v-for="(item, index) of imageList"
          :key="index"
        >
          <el-image
            style="height: 200px"
            :src="item.url"
            fit="cover"
          ></el-image>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      :visible.sync="dialogUpload"
      title="上次素材"
      :append-to-body="true"
      width="500px"
    >
      <el-upload
        class="upload-demo"
        drag
        name="avatar"
        action="http://127.0.0.1:3000/file/profile"
        multiple
      >
      <!-- headers="uploadHeaders" -->
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
import { getImages } from "@/api/image.js";

export default {
  name: "SourcePage",
  data() {
    return {
      collect: false, // 获取全部的图片素材
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imageList: [],
      dialogUpload: false,
      uploadHeaders: ""
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    // 触发两次请求
    async loadImages(isCollected) {
      const {
        data: { list },
      } = await getImages({
        isCollected,
      });
      this.imageList = list;
    },

    // 使用change事件注册在 el-radio-group
    onChangeCollect(value) {
      console.log(value);
      this.loadImages(value);
    },
  },
};
</script>

<style lang="less" scoped>
.image-container {
  .image-control {
    display: flex;
    justify-content: space-between;
  }
}
</style>
