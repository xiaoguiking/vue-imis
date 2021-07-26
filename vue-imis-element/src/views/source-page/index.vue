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
      <!-- 分割线 -->
      <el-divider></el-divider>
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
          class="image-item"
        >
          <el-image
            style="height: 200px"
            :src="item.url"
            fit="cover"
            :preview-src-list="srcList"
            @click="onClickImage(item.url)"
          ></el-image>
          <div class="image-action">
            <el-button
              type="success"
              :icon="item.isCollected ? 'el-icon-star-on' : 'el-icon-star-off'"
              circle
              size="mini"
              @click="onCollectImage(item)"
              :loading="item.loading"
            ></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete-solid"
              circle
              size="mini"
              @click="onCollectImage(item)"
              :loading="item.loading"
            ></el-button>
          </div>
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
import { getImages, collectImage, deleteImage } from "@/api/image.js";

export default {
  name: "SourcePage",
  data() {
    return {
      collect: false, // 获取全部的图片素材
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imageList: [],
      dialogUpload: false,
      uploadHeaders: "",
      loading: true,
      page: 1,
      total: null,
      srcList: []
    };
  },
  created() {
    this.loadImages(this.page, false);
  },
  methods: {
    // 触发两次请求
    async loadImages(page, isCollected = false) {
      this.page = page;
      this.loading = true;
      const {
        data: { list, total }
      } = await getImages({
        isCollected,
        page,
        pageSize: 18
      });
      this.loading = false;
      list.forEach(img => {
        console.log(img);
        img.loading = false;
      });
      this.imageList = list;
      this.total = total;
    },

    // 使用change事件注册在 el-radio-group
    onChangeCollect(value) {
      console.log(value);
      this.loadImages(this.page, value);
    },

    handleUpload() {
      this.dialogUpload = false;
      this.loadImages(this.page, false);
      this.$message({
        type: "success",
        message: "图片上传成功"
      });
    },

    changePage(page) {
      console.log(page, "page");
      this.loadImages(page, this.collect);
    },

    onClickImage(url) {
      console.log(url, "url");
      (this.srcList = []).push(url);
      console.log(this.srcList, "data");
    },

    async onCollectImage(item) {
      const { _id, isCollected } = item;
      item.loading = true;
      const { data } = await collectImage({
        _id,
        isCollected: !isCollected
      });
      if (data.code == "0") {
        this.$message({
          type: "success",
          message: data.message
        });
      }
      item.loading = false;
      this.loadImages(1, this.collect);
    },

    async onDeleteImage(item) {
      const { _id } = item;
      item.loading = true;
      const { data } = await deleteImage(_id);
      if (data.code == "0") {
        this.$message({
          type: "success",
          message: data.message
        });
      }
      item.loading = false;
      this.loadImages(1, this.collect);
    }
  }
};
</script>

<style lang="less" scoped>
.image-container {
  .image-control {
    display: flex;
    justify-content: space-between;
  }

  .image-item {
    position: relative;

    .image-action {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      position: absolute;
      bottom: 0;
      left: 10px;
      right: 10px;
      box-sizing: border-box;
      background-color: rgba(204, 204, 204, 0.5);

      .el-icon-star-on {
        color: cornflowerblue;
      }
      .el-icon-delete:hover {
        color: cornflowerblue;
        cursor: pointer;
      }
      .el-icon-delete-solid:hover {
        color: cornflowerblue;
        cursor: pointer;
      }
      .el-icon-star-off:hover {
        color: cornflowerblue;
        cursor: pointer;
      }
    }
  }
}
</style>
<style>
.el-pagination {
  text-align: right;
}
</style>
