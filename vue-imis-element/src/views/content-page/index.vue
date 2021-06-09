<template>
  <div class="content-page">
    <h1>content-page</h1>
    <!-- form 表单 -->
    <el-card class="box-card">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="form.resource" ref="resource">
              <el-radio label="全部"></el-radio>
              <el-radio label="草稿"></el-radio>
              <el-radio label="待审核"></el-radio>
              <el-radio label="审核通过"></el-radio>
              <el-radio label="审核失败"></el-radio>
              <el-radio label="已删除"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道">
            <el-select
              v-model="form.channel"
              placeholder="请选择活动区域"
              ref="channel"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
              >
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- list 列表 -->
    <el-card class="box-card" style="margin-top: 20px">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="city" label="城市"> </el-table-column>
        <el-table-column prop="province" label="省市"> </el-table-column>
        <el-table-column prop="zip" label="zip"> </el-table-column>
        <el-table-column prop="id" label="id"> </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getArticlesList } from "@/api/article.js";
export default {
  name: "ContentPage",
  data() {
    return {
      form: {
        name: "",
        channel: "",
        date1: "",
        date2: "",
        resource: "",
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],

      tableData: [
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
      ],
    };
  },
  mounted() {
    this.getArticleslist();
  },
  methods: {
    onSubmit(formName) {
      console.log("submit!", this.form);
      this.$refs[formName];
    },

    // 请求列表数据
    async getArticleslist() {
      const {
        data: {
          data: { list },
        },
      } = await getArticlesList();

      this.uniqueArr(list);
      this.tableData = list;
    },

    uniqueArr(data) {
      let hasArr = [];
      let hasObj = {};
      data.forEach((item) => {
        console.log(item, "=====================< tiem")
        if (hasObj[item.name]) {
          hasArr.push(item);
          if (hasObj[item.name].length === 0) return;
          hasArr.push(hasObj[item.name]);
          hasObj[item.name] = [];
          console.log(hasArr)
        } else {
          hasObj[item.name] = item;
        }
      });
      hasObj = {};
      console.log(data, hasArr, "=======>");
    },
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: right;
}
</style>
