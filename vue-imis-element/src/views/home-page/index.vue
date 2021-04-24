<template>
  <div class="index-container">
    <!-- <header class="index-title">welcome vue-imis</header> -->
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card>
            <div class="user-info">
              <el-avatar :size="150" :src="circleUrl"></el-avatar>
              <div class="user-info-cont">admin</div>
            </div>
            <div class="user-info-list">
              <span>时间：{{ time }}</span>
              <span></span>
            </div>
            <div class="user-info-list">位置： {{ "北京" }}</div>
          </el-card>
        </div></el-col
      >
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <el-card>
            <div slot="header"></div>
            <div>待办事项</div>
          </el-card>
        </div>
      </el-col>
    </el-row>
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
import axios from "axios";
export default {
  name: "Home",
  data() {
    const time = this.dayjs().format("YYYY-MM-DD HH:mm:ss");
    return {
      homelist: [],
      // 头像
      circleUrl:
        "https://img2.baidu.com/it/u=196908930,1441537649&fm=26&fmt=auto&gp=0.jpg",
      time: time
    };
  },

  mounted() {
    // promise
    // this.$axios.get("/home/getData").then((res) => {
    //   console.log(res.data);
    // });
    this.getData();
    // this.getLocation();
  },
  methods: {
    async getData() {
      const { data } = await axios.get("/home/getData");
      const { videoData } = data.data;
      this.homelist = videoData;
    },

    // 获取地址位置
    getLocation() {
      console.log("地址位置");
      navigator.geolocation.getCurrentPosition(
        function(position) {
          let coords = position.coords;
          // 获取精度
          console.log(coords.longitude);
          // 获取纬度
          console.log(coords.latitude);
          // 获取经度或者纬度的精度(以米为单位)
          console.log(coords.accuracy);
        },
        function(error) {
          // 错误的回调函数
          let errorTypes = {
            1: "位置服务被拒绝",
            2: "获取不到位置信息",
            3: "获取信息超时"
          };
          alert(errorTypes[error.code]);
        }
      );
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
  .user-info {
    display: flex;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
    align-items: center;

    .user-info-cont {
      margin-left: 10px;
      padding: 10px;
    }
  }

  .user-info-list {
    // display: inline-block;
  }

  .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px 10px;
    margin-bottom: 20px;

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

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
