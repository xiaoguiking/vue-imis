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
          >上传素材</el-button
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
          v-loading="loading"
        >
          <el-image
            style="height: 200px"
            :src="item.url"
            fit="cover"
          ></el-image>
        </el-col>
      </el-row>
      <el-pagination 
        background
        layout="prev, pager, next"
        :current-page.sync="page"
        :total="total"
        style="margin-top: 20px"
        @current-change="changePage"
        :disabled="loading"
        >
      </el-pagination>
    </el-card>
    <el-dialog
      :visible.sync="dialogUpload"
      title="上传素材"
      :append-to-body="true"
      width="500px"
    >
      <el-upload
        v-if="dialogUpload"
        class="upload-demo"
        drag
        name="avatar"
        action="http://127.0.0.1:3000/file/profile"
        multiple
        :on-success="handleUpload"
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
      uploadHeaders: "",
      loading: true,
      page: 1,
      total: null
    };
  },
  created() {
    this.loadImages(this.page, false);
  },
  methods: {
    // 触发两次请求
    async loadImages(page,isCollected = false) {
      this.loading = true;
      const {
        data: { list, total },
      } = await getImages({
        isCollected,
        page,
        pageSize: 18
      });
      console.table(list);
      this.loading = false;
      this.imageList = list;
      this.total = total;
    },

    // 使用change事件注册在 el-radio-group
    onChangeCollect(value) {
      console.log(value);
      this.loadImages(this.page,value);
    },

    handleUpload(response, file, fileList) {
      console.log(response, file, fileList);
      this.dialogUpload = false;
      this.loadImages(this.page, false);
    },

    changePage(page) {
      console.log(page, "page")
      this.loadImages(page)
    }
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
<style>
.el-pagination {
  text-align: right;
}
</style>
