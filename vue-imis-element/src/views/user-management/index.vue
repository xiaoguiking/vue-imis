<template>
  <div class="content-page">
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
        ref="myTable"
        height="800"
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
            <el-tag :type="articleStatusList[Number(scope.row.status)].type">{{
              articleStatusList[Number(scope.row.status)].text
            }}</el-tag>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="img" label="图片" width="180" align="center">
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
        </el-table-column> -->
        <el-table-column prop="_id" label="_id"> </el-table-column>
        <el-table-column label="操作" width="100px" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              circle
              @click="$router.push('/publish?id=' + scope.row._id)"
            ></el-button>
            <!-- @click="handleEdit(scope.$index, scope.row)" -->
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
      <!-- <el-pagination
        style="margin-top: 20px"
        background
        layout="prev, pager, next"
        :total="totalCount"
        :page-size="pageSize"
        :disabled="loading"
        :current-page.sync="page"
        @current-change="changePage"
      >
      </el-pagination> -->
    </el-card>
  </div>
</template>

<script>
import { getArticlesList, deleteArticleList } from "@/api/article.js";

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
      tableData: [],
      articleStatusList: [
        { status: 0, text: "草稿", type: "info" },
        { status: 1, text: "待审核", type: "" },
        { status: 2, text: "审核通过", type: "success" },
        { status: 3, text: "审核失败", type: "warning" },
        { status: 4, text: "已删除", type: "danger" },
      ],
      // articleStatus: ["草稿", "待审核", "审核通过", "审核失败", "已删除"],
      totalCount: 0, // 数据总数
      pageSize: 15, // 每页展示条数
      status: null, // 文章状态
      rangeDate: null,
      loading: true,
      page: 1,
      currentPage: 1,
    };
  },
  created() {
    this.loadData();
  },
  mounted() {
    this.tableListener();
  },
  methods: {
    tableListener() {
      console.log("监听表格dom对象的滚动事件");
      let that = this;
      let dom = that.$refs.myTable.bodyWrapper;

      console.log(dom, "dom==========>");
      dom.addEventListener("scroll", function () {
        //实现原理: 判断表格滚动条是否滚动到底部
        // scrollHeight: 元素的高度即表格内容的高度
        // scrollTop: 元素滚动出去的高度
        // clientHeight: 元素可视区域的高度
        // 当scrollTop + clientHeight = scrollHeight 时,滚动条滚动到底部

        const scrollDistance =
          dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        console.log("scroll", scrollDistance);

        console.log(dom.scrollHeight, "表格内容高度");
        console.log(dom.clientHeight, "dom============> 714");
        console.log(dom.scrollTop, "dom=============> 滚动高度");
        console.log(scrollDistance, "剩余距离");
        if (scrollDistance <= 0) {
          console.log("请求");
          //等于0证明已经到底，可以请求接口
          // if (that.currentPage < (this.totalCount / this.page)) {
          // console.log((this.totalCount / this.page), "计算")
          //当前页数小于总页数就请求
          console.log(2);
          that.currentPage++; //当前页数自增
          //请求接口的代码
          // that.loadData();
          let data = [
            {
              createTime: "2021-01-02T22:31:00.000Z",
              desc: "增加数据剑仙一剑，可与千古",
              img: "/images/book10.jpg",
              name: "增加数据",
              price: "333444",
              status: 2,
              time: "2021-06-02T22:31:00.000Z",
              typeid: 4,
              typename: "增加数据恋爱",
              _id: "60c4cffa69bed4173c1a228a",
            },
          ];
          that.tableData = that.tableData.concat(data);
          console.log(that.tableData, "数据");
          // }
        } else {
          that.getArticleslist();
        }
      });
    },
    // 请求列表数据
    loadData() {
      console.log("getData");

      this.getArticleslist();
      console.log(this.tableData, "是否有数据");
      let data = this.tableData.splice(
        (this.currentPage - 1) * this.pageSize,
        this.pageSize
      );
      console.log(data, "data");
      this.tableData = this.tableData.concat(data);
      console.log("表格数据量：", this.tableData.length);
    },

    async getArticleslist(page = 1) {
      this.loading = true;
      const {
        data: { list, total },
      } = await getArticlesList({
        page,
        pageSize: 15,
        status: this.status,
        createTime: this.rangeDate ? this.rangeDate[0] : null,
        updateTime: this.rangeDate ? this.rangeDate[1] : null,
      });
      let data = list.splice(0, 15);
      console.log(data);
      this.loading = false;
      this.tableData = data;
      this.totalCount = total;
    },

    // 第几页
    changePage(page) {
      this.getArticleslist(page);
    },

    async handleDelete(index, row) {
      console.log(index, row._id, "========");
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const { data } = await deleteArticleList({ _id: row._id });
          console.log(data, "==========>");
          this.getArticleslist(this.page);
          window.location.reload();
          if (data.code === 0) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
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
