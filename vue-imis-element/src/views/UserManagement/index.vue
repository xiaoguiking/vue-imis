<template>
  <div class="user-container">
    <el-table :data="shopList" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column prop="id" label="id" width="120"> </el-table-column>
      <el-table-column prop="index" label="index" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="openModel"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserManagement",
  data() {
    return {
      shopList: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    openModel() {
      alert(1111);
    },
    // 请求数据
    getList() {
      axios
        .get("https://mock.yonyoucloud.com/mock/15866/tablelist")
        .then(function(response) {
          // console.log(typeof [response.data]);
          // console.log(response.data, "data")
          // this.shopList = [response.data];
          // console.log(this.shopList, "list")
          console.log(this.shopList, "list")
         return response.data.map(item => {
            console.log(item, "item")
          })
        
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped></style>
