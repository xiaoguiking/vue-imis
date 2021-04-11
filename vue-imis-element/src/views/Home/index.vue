<template>
  <div class="index-container">
    <!-- <header class="index-title">welcome vue-imis</header> -->
    <div class="box-container">
      <el-card class="box-card" v-for="(item, index) of homelist" :key="index">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div class="index-item">
          {{ item.content }}
        </div>
        <a class="index-bottom">查看</a>
      </el-card>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      homelist: []
    };
  },
  mounted() {
    // promise
    // this.$axios.get("/home/getData").then((res) => {
    //   console.log(res.data);
    // });
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await this.$axios.get("/home/getData");
      const { videoData } = data.data;
      this.homelist = videoData;
    }
  }
};
</script>

<style lang="less" scoped>
.index-container {
  .index-title {
    font-size: 30px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 20px;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px 10px;

    .box-card {
      /deep/ .el-card__body {
        padding: 0 !important;
      }
    }

    .index-item {
      padding: 5px;
    }

    .index-bottom {
      display: block;
      background-color: #e0e1e2;
      text-align: center;
      font-weight: 700;
      // width: calc(100% + 2px);
      border-radius: 0 0 0.28571429rem 0.28571429rem !important;
      padding: 10px;
    }
  }
}
</style>
