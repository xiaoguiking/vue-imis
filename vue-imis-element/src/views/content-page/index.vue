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
      <div slot="header" class="clearfix">
        <span>根据搜索条件查询到111111条数据</span>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="time" label="出版日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="书籍名称" width="140">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="50px"> </el-table-column>
        <el-table-column prop="desc" label="描述" width="200px">
        </el-table-column>
        <el-table-column prop="typename" label="书籍类型"> </el-table-column>
        <el-table-column prop="typeid" label="书籍id" width="50px"> </el-table-column>
        <el-table-column prop="status" label="文章状态"> 
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status===0">草稿</el-tag>
            <el-tag v-if="scope.row.status===1" type="info">待审核 </el-tag>
            <el-tag v-if="scope.row.status===2" type="success">审核通过</el-tag>
            <el-tag v-if="scope.row.status===3" type="danger">审核失败</el-tag>
            <el-tag v-if="scope.row.status===4" >已删除</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="img" label="图片" width="180" align="center">
          <template slot-scope="scope">
            <el-popover
              placement="right"
              :title="scope.row.img + scope.row.name"
              trigger="hover"
            >
              <img
                :src="'http://localhost:3000' + scope.row.img"
                width="150px"
                height="150px"
              />
              <img
                slot="reference"
                :src="'http://localhost:3000' + scope.row.img"
                style="width: 150px; height: 150px"
              />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="id"> </el-table-column>
        <el-table-column label="操作" width="100px">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            type="primary" icon="el-icon-edit" circle
              ></el-button
            >
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              type="danger" icon="el-icon-delete" circle
              ></el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
// 文章状态 0草稿 1待审核 2审核通过 3审核失败 4已删除 5不传为全部
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
        data: { list },
      } = await getArticlesList({
        page: 1,
        pageSize: 15,
      });
      console.log(list);
      this.uniqueArr(list);
      this.tableData = list;
    },

    split_array(arr, len) {
      const a_len = arr.length;
      const result = [];
      for (let i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
      }
      return result;
    },

    uniqueArr(data) {
      let hasArr = [];
      let hasObj = {};

      data.forEach((item) => {
        if (hasObj[item.name]) {
          hasArr.push(item);
          if (hasObj[item.name].length === 0) return;
          hasArr.push(hasObj[item.name]);
          hasObj[item.name] = [];
        } else {
          hasObj[item.name] = item;
        }
      });

      hasObj = {};

      if (hasArr.length !== 0) {
        const uniqueName = Array.from(new Set(hasArr.map((i) => i.name)));
        const uniqueId = Array.from(hasArr.map((i) => i.id));
        const id = this.split_array(uniqueId, 20).map((item) => {
          return item + "<br>";
        });
        this.$message({
          duration: 10000,
          dangerouslyUseHTMLString: true,
          message: `警告哦，这是一条警告消息: <br/> 重复的name: ${uniqueName}, 重复的id： ${id} `,
          type: "warning",
        });
      }

      return {
        hasArr,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.el-pagination {
  text-align: right;
}
</style>
