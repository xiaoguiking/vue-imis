<template>
  <div class="fans-page">
    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <h2>用户管理</h2>
        <el-upload
          class="upload-demo"
          action="http://127.0.0.1:3000/file/xslx/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="3"
          name="excel"
          :on-exceed="handleExceed"
          style="margin: 10px; display: inline-block"
        >
          <el-button size="small" type="primary">点击上传excel</el-button>
        </el-upload>
        <el-button type="primary" style="margin: 10px; display: inline-block" @click="handleMongo">写库</el-button>
        <el-table :data="fansList" style="width: 100%" border>
          <el-table-column prop="blo" label="blo" width="width">
          </el-table-column>
          <el-table-column prop="email" label="email" width="width">
          </el-table-column>
          <el-table-column prop="userName" label="用户名" width="width">
          </el-table-column>
          <el-table-column prop="_id" label="_id" width="width">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="粉丝管理" name="second">
        <h2>粉丝管理</h2>
        <div id="main" style="width: 700px; height: 600px" ref="main"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import echarts from "echarts";
import { getUsers, insertUsers } from "@/api/user.js";

export default {
  name: "FansPage",
  data() {
    return {
      activeName: "first",
      fansList: [],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.fetchUsers();

    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // console.log(this.$refs)
      let myChart = echarts.init(this.$refs.main);
      // 绘制图表
      myChart.setOption({
        title: { text: "ECharts 入门示例" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },

    async fetchUsers() {
      const { data } = await getUsers();
      this.fansList = data.userList;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`, fileList);
    },

    async handleMongo() {
        const data = await insertUsers();
        console.log(data)
    }
  }
};
</script>

<style lang="less" scoped></style>
