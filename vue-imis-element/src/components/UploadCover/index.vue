<template>
  <div class="upload-cover">
    封面
    <div class="upload-container">
      <img
        src="http://localhost:3000/my-uploads/yan30.jpeg"
        alt=""
        @click="selectUploadImg"
      />
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" width="width">
      <div>
        <el-tabs
          v-model="activeName"
          type="card"
          @tab-click="handleClickTab($event)"
        >
          <el-tab-pane label="素材库" name="first">
            <!-- 素材列表 -->
            <el-card>
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
                    style="height: 200px, width: 300px"
                    :src="item.url"
                    fit="cover"
                    @click="onClickImage(item.url)"
                  ></el-image>
                  <div class="image-action">
                    <el-button
                      type="success"
                      :icon="
                        item.isCollected
                          ? 'el-icon-star-on'
                          : 'el-icon-star-off'
                      "
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
          </el-tab-pane>
          <el-tab-pane label="上传图片素材" name="second">
            <label for="upload-image" class="upload-image">
              <input
                type="file"
                name="upload-image"
                id="upload-image"
                @change="changeUploadImage($event)"
                ref="file"
                hidden
              />
              <p>上传图片素材</p>
            </label>
            <img src="" alt="上传图片" ref="preview-image" :style="priview" />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onCoverConfirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { getImages, collectImage, deleteImage } from "@/api/image.js";
import { getImages,  UploadImages } from "@/api/image.js";
export default {
  name: "UploadCover",
  data() {
    return {
      dialogVisible: false,
      activeName: "first",
      loading: false,
      imageList: [],
      page: 1,
      total: 20,
      previewImg: "",
      priview: {
        width: "300px",
        height: "300px"
      }
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    selectUploadImg() {
      this.dialogVisible = true;
    },

    // 初始获取全部图片
    async loadImages(page, isCollected = false) {
      this.page = page;
      this.loading = true;
      const {
        data: { list, total }
      } = await getImages({
        isCollected,
        page,
        pageSize: 10
      });
      this.loading = false;
      list.forEach(img => {
        img.loading = false;
      });
      this.imageList = list;
      this.total = total;
    },

    // 切换状态
    handleClickTab(e) {
      const isCollect = e.name;
      if (isCollect) {
        this.loadImages();
      } else {
        console.log(isCollect);
      }
    },

    changePage() {
      console.log("current page");
    },

    changeUploadImage(e) {
      const file = e.target.files[0];
      const blobImg = window.URL.createObjectURL(file);
      this.$refs["preview-image"].src = blobImg;
    },

    onCoverConfirm() {
      const file = this.$refs.file.files[0];
      // 上传图片 &&  并且有上传的文件
      if (this.activeName === "second") {
        if (!file) {
          this.$message("请选择图片文件上传");
          return;
        }
        // 调用接口 执行上传文件操作
        const fd = new FormData();
        fd.append('avatar', file)
        UploadImages(fd).then(res => {
          console.log(res)
        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
.upload-cover {
  flex-direction: row;
  .upload-container {
    width: 280px;
    height: 180px;
    border: 1px solid darkcyan;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .upload-image {
    // border: 1px dashed red;
    display: flex;
    width: 300px;
    height: 200px;
    border: 1px dashed blue;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
  }
}
</style>
