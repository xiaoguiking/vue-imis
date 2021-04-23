<template>
  <div class="system-container">
    <!-- 查看弹框 -->
    <el-dialog title="查看地址" :visible.sync="dialogTableVisible">
      <el-table :data="rowShowData">
        <el-table-column prop="id" label="id" width="120"> </el-table-column>
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 编辑弹框 -->
    <el-dialog title="编辑地址" :visible.sync="dialogFormVisible">
      <el-form :model="rowEditData">
        <el-form-item label="name">
          <el-input v-model="rowEditData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="rowEditData.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="id">
          <el-input v-model="rowEditData.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 列表 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="id" label="id" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="400">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="handleShowClick(scope.row)"
            type="text"
            size="small"
            >查看</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableData } from "@/mock/tableList.js";
export default {
  name: "SystemManagement",
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      rowShowData: [],
      rowEditData: {}
    };
  },
  methods: {
    handleShowClick(row) {
      this.dialogTableVisible = true;
      (this.rowShowData = []).push(row);
    },
    handleEditClick(row) {
      this.dialogFormVisible = true;
      this.rowEditData = row;
    }
  },
  created() {
    const listData = tableData.map((item, index) => {
      item["id"] = index;
      return item;
    });
    this.tableData = listData;
  }
};
</script>

<style lang="less" scoped></style>
