<template>
  <div class="common-table">
    <!-- 基础表格实例 -->
    <!-- <el-table :data="tableData" style="width: 100%" border show-header>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table> -->
    <el-table :data="tableDataList" border v-loading="config.loading">
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabelList"
        :label="item.label"
        :key="item.prop"
        :prop="item.prop"
      >
      </el-table-column>
      <el-table-column label="操作" v-if="isShowOp">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    isShowOp: {
      type: Boolean,
      default: true
    },
    tableLabelList: {
      type: Array
    },
    tableDataList: {
      type: Array
    },
    config: Object
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableLabel: {
        date: "日期",
        name: "姓名",
        address: "地址"
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$emit("edit");
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="less" scoped>
.common-table {
  // height: 500px;
}
</style>
