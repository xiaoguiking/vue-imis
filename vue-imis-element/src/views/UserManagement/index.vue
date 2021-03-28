<template>
  <div class="user-container">
    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20" style="margin-bottom:20px">
        <el-col :span="8">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <common-table
        :tableDataList="tableDataList"
        :tableLabelList="tableLabelList"
        :config="config"
      ></common-table>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import CommonTable from "@/components/CommonTable";
export default {
  name: "UserManagement",
  data() {
    return {
      tableDataList: [],
      tableLabelList: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "address",
          label: "地址",
        },
        {
          prop: "sex",
          label: "性别",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "id",
          label: "id",
        },
      ],
      config: {
        loading: false,
        page: 1,
        total: 30,
      },
    };
  },
  components: {
    CommonTable,
  },
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    openModel() {
      alert(1111);
    },
    // 请求数据
    getList() {
      var that = this;
      console.log(this, that);
      this.config.loading = true;
      axios
        .get("https://mock.yonyoucloud.com/mock/15866/tablelist")
        .then(function(response) {
          // 记录this指向问题
          console.log(this);
          that.tableDataList = response.data.data.users;
          that.config.loading = false;
          console.log(response.data.data.users, "data");
        })
        .catch(function(error) {
          console.log(error, "error");
        });
    },
  },
};
</script>

<style lang="less" scoped></style>
