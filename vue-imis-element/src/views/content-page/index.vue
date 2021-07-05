<template>
  <div class="content-page">
    <!-- form 表单 -->
    <el-card class="box-card">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="状态">
            <!-- <el-radio-group v-model="form.resource" ref="resource"> -->
            <el-radio-group v-model="status" ref="resource">
              <el-radio :label="null">全部</el-radio>
              <el-radio :label="0">草稿</el-radio>
              <el-radio :label="1">待审核</el-radio>
              <el-radio :label="2">审核通过</el-radio>
              <el-radio :label="3">审核失败</el-radio>
              <el-radio :label="4">已删除</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="频道">
            <el-select
              v-model="channelId"
              placeholder="请选择文章频道"
              ref="channel"
              clearable
            >
              <el-option label="全部" :value="null"> </el-option>
              <el-option
                v-for="channel in channels"
                :key="channel.id"
                :label="channel.name"
                :value="channel.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期">
            <el-col :span="11">
              <el-date-picker
                v-model="rangeDate"
                type="datetimerange"
                :picker-options="pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              >
                >
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <!-- <el-button type="primary" @click="onSubmit('form')"
              >立即查询</el-button
            > -->
            <el-button
              type="primary"
              :disabled="loading"
              @click="getArticleslist(1)"
              >立即查询
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <!-- list 列表 -->
    <el-card class="box-card" style="margin-top: 20px">
      <div slot="header" class="clearfix">
        <span>根据搜索条件查询到{{ totalCount }}条数据</span>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column prop="time" label="出版日期" width="180" fixed>
        </el-table-column>
        <el-table-column prop="name" label="书籍名称" width="140">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="50px">
        </el-table-column>
        <el-table-column prop="desc" label="描述" width="200px">
        </el-table-column>
        <el-table-column prop="typename" label="书籍类型"> </el-table-column>
        <el-table-column prop="typeid" label="书籍id" width="50px">
        </el-table-column>
        <el-table-column prop="status" label="文章状态">
          <template slot-scope="scope">
            <el-tag :type="articleStatusList[scope.row.status].type">{{
              articleStatusList[scope.row.status].text
            }}</el-tag>
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
        <el-table-column label="操作" width="100px" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              type="primary"
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              type="danger"
              icon="el-icon-delete"
              circle
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件  total 设置总数据的条数 默认每页十条数据-->
      <el-pagination
        style="margin-top: 20px"
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="pageSize"
        :disabled="loading"
        :current-page.sync="page"
        @current-change="changePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
// 文章状态 0草稿 1待审核 2审核通过 3审核失败 4已删除 5不传为全部
import { getArticlesList, deleteArticleList } from "@/api/article.js";
// getChannels deleteArticleList
import img2 from "@/assets/img/2.jpeg";
import img1 from "@/assets/img/1.jpeg";

export default {
  name: "ContentPage",
  data() {
    return {
      form: {
        name: "",
        channel: "",
        date1: "",
        date2: "",
        resource: ""
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
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      rules: {
        telphone: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        cardnum: [
          { required: true, message: "请输入买受人身份证号", trigger: "blur" }
        ]
      },
      tableData: [
        {
          time: "2016-05-01",
          name: "诛仙",
          price: "99999999",
          desc: "可怜当时月朦胧",
          typename: "武侠",
          typeid: 5,
          status: 3,
          address: "上海市普陀区金沙江路 1519 弄",
          img: img2
        },
        {
          time: "2016-03-01",
          name: "帝霸",
          price: "99999999",
          desc: "直捣黄龙",
          typename: "武侠",
          typeid: 5,
          status: 1,
          address: "上海市普陀区金沙江路 1519 弄",
          img: img1
        }
      ],
      articleStatusList: [
        { status: 0, text: "草稿", type: "info" },
        { status: 1, text: "待审核", type: "" },
        { status: 2, text: "审核通过", type: "success" },
        { status: 3, text: "审核失败", type: "warning" },
        { status: 4, text: "已删除", type: "danger" }
      ],
      // articleStatus: ["草稿", "待审核", "审核通过", "审核失败", "已删除"],
      totalCount: 0, // 数据总数
      pageSize: 15, // 每页展示条数
      status: null, // 文章状态
      channels: [
        {
          id: 1,
          name: "数码"
        },
        {
          id: 2,
          name: "科技"
        },
        {
          id: 3,
          name: "思想"
        },
        {
          id: 4,
          name: "军事"
        },
        {
          id: 5,
          name: "言情"
        },
        {
          id: 6,
          name: "水文"
        },
        {
          id: 7,
          name: "游记"
        }
      ],
      channelId: null, // 查询文章频道
      rangeDate: null,
      loading: true,
      page: 1,
    };
  },
  mounted() {
    this.getArticleslist();
    // this.getChannelsList();
  },
  methods: {
    onSubmit(formName) {
      console.log("submit!", this.form, "this========", formName);
      alert("功能待开发");
      const data = { ...this.form };
      console.log(data, "data");
      console.table(data);

      // this.$refs.name;
    },

    // 请求列表数据
    async getArticleslist(page = 1) {
      this.loading = true;
      const {
        data: { list, total }
      } = await getArticlesList({
        page,
        pageSize: this.pageSize,
        status: this.status,
        channel_id: this.channelId,
        createTime: this.rangeDate ? this.rangeDate[0] : null,
        updateTime: this.rangeDate ? this.rangeDate[1] : null
      });
      console.log(total);
      this.loading = false;
      this.uniqueArr(list);
      this.tableData = list;
      this.totalCount = total;
    },

    // 第几页
    changePage(page) {
      this.getArticleslist(page);
    },
    // 每页条数
    // changePageSize(pageSize) {
    //   console.log(pageSize);
    //   this.getArticleslist(pageSize);
    // },
    split_array(arr, len) {
      const a_len = arr.length;
      const result = [];
      for (let i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
      }
      return result;
    },

    // 获取文章频道
    // async getChannelsList () {
    //   const {data} = await getChannels();
    //   this.channels = data;
    // },

    uniqueArr(data) {
      let hasArr = [];
      let hasObj = {};

      data.forEach(item => {
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
        const uniqueName = Array.from(new Set(hasArr.map(i => i.name)));
        const uniqueId = Array.from(hasArr.map(i => i.id));
        const id = this.split_array(uniqueId, 20).map(item => {
          return item + "<br>";
        });
        this.$message({
          duration: 10000,
          dangerouslyUseHTMLString: true,
          message: `警告哦，这是一条警告消息: <br/> 重复的name: ${uniqueName}, 重复的id： ${id} `,
          type: "warning"
        });
      }

      return {
        hasArr
      };
    },

    handleEdit(index, row) {
      alert("编辑");
      console.log(index, row);
    },
    async handleDelete(index, row) {
      console.log(index, row._id, "========");
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data } = await deleteArticleList({ _id: row._id });
          console.log(data, "==========>");
          this.getArticleslist(this.page);
          if (data.error === 0) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped></style>
<style>
.el-pagination {
  text-align: right;
}
.el-table .warning-row {
  background-color: rgb(201, 136, 16);
}

.el-table .success-row {
  background-color: #0baff0;
}
</style>
