<template>
  <div class="index-container">
    <!-- <header class="index-title">welcome vue-imis</header> -->
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card>
            <div class="user-info">
              <el-avatar :size="150" :src="circleUrl"></el-avatar>
              <div class="user-info-cont">admin</div>
            </div>
            <div class="user-info-list">
              <span>时间:{{ time }}</span>
              <span></span>
            </div>
            <div class="user-info-list">位置:{{ city }}</div>
          </el-card>
        </div></el-col
      >
      <!-- 待办事项本地版 -->
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <el-card>
            <div slot="header" class="clearfix">
              待办事项
              <span></span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >添加</el-button
              >
            </div>
            <!-- <div class="todo">待办事项</div> -->
            <el-table :show-header="false" :data="todoList" style="width: 100%">
              <el-table-column width="40">
                <template slot-scope="scope">
                  <el-checkbox v-model="scope.row.status"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <div
                    class="todo-item"
                    :class="{ 'todo-item-del': scope.row.status }"
                  >
                    {{ scope.row.title }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column width="60">
                <template slot-scope="scope">
                  <i
                    class="el-icon-edit"
                    style="margin-right: 10px"
                    @click.prevent="editRow(scope.$index, scope.row)"
                  ></i>
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, scope.row)"
                    type="text"
                    size="small"
                  >
                    <i class="el-icon-delete"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
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
    <!-- 待办事项axios -->
    <el-col :span="16" style="margin-bottom: 20px"
      ><div class="grid-content bg-purple">
        <el-card>
          <div slot="header" class="clearfix">
            待办事项axios
            <span></span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="addTodo()"
              >添加</el-button
            >
          </div>
          <el-table :show-header="false" :data="todoAxios" style="width: 100%">
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{ 'todo-item-del': scope.row.status }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template slot-scope="scope">
                <i
                  class="el-icon-edit"
                  style="margin-right: 10px"
                  @click.prevent="patchTodo(scope.$index, scope.row)"
                ></i>
                <el-button
                  @click.native.prevent="deleteTodo(scope.row)"
                  type="text"
                  size="small"
                >
                  <i class="el-icon-delete"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </el-col>
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="saveEditTodo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
// import {getTodoList, getTodoId, addTodo, patchTodo,  deleteTodo } from "@/api/todo.js"
import { getTodoList, deleteTodoList, addTodoList } from "@/api/todo.js";
import { getIpInfo, getWeather } from "@/api/other.js";

// import service from "../../api/config";
// import adver from "@/assets/img/adver.jpg";

import adver from "@/assets/img/adver2.jpg";

export default {
  name: "Home",
  data() {
    const time = this.dayjs().format("YYYY-MM-DD HH:mm:ss");
    return {
      homelist: [],
      // 头像
      circleUrl: adver,
      // circleUrl: "https://gitee.com/king8686/web-images/blob/master/vue-imis/Garden%20of%20Words/ChMkJlbKyUOIbjJjACM9DhzAtPkAALILgPbML8AIz0m847.png",
      time: time,
      editVisible: false,
      city: "",
      adcode: "",
      form: {
        id: "",
        title: ""
      },
      idx: -1,
      todoList: [
        {
          id: 1,
          title: "我喝过很烈的酒,也放过不该放的手,从前不会回头,往后不会将就."
        },
        {
          id: 2,
          title:
            "什么叫喜欢一个人?那就是见到对方之前,不知情为何物,错过之后,更不知情为何物。"
        },
        {
          id: 3,
          title: "故事故事，便是故去的事情了，多说无益。"
        }
      ],
      todoAxios: []
    };
  },

  mounted() {
    // promise
    // this.$axios.get("/home/getData").then((res) => {
    //   console.log(res.data);
    // });
    this.getData();
    this.getTodo();
    this.getLocation();
    this.getWeatherInfo();
  },
  methods: {
    async getData() {
      const { data } = await axios.get("/home/getData");
      const { videoData } = data.data;
      this.homelist = videoData;
    },

    deleteRow(index) {
      this.todoList.splice(index, 1);
    },

    // 编辑操作
    editRow(index, rows) {
      console.log(index)
      this.form = rows;
      this.editVisible = true;
    },

    // 编辑操作
    handleEdit(index, row) {
      this.idx = index;
      this.form = row;
      this.editVisible = true;
    },
    // 保存编辑
    async saveEditTodo() {
      this.editVisible = false;
      console.log(this.form.title, "title");
      const { data } = await addTodoList({ title: this.form.title });
      console.log(data);
      this.getTodo();
      // if (data.error === 1) {
      //   this.$notify({
      //     title: '提示',
      //     message: data.message,
      //     duration: 0
      //   });
      // }
    },

    //  添加item
    addItem() {
      this.editVisible = true;
      console.log(this.form.id, "id");
      console.log(
        this.todoList.push({
          id: this.form.id,
          title: this.form.title
        })
      );
    },

    // 获取todo
    async getTodo() {
      const {
        data: { data }
      } = await getTodoList();
      this.todoAxios = data;
    },
    // 获取指定id的todo

    // 添加todo
    addTodo() {
      this.editVisible = true;
      this.form.title = "";
      console.log(this.form.title, "title");
    },
    // 修改todo
    patchTodo() {},

    // 删除todo
    async deleteTodo(row) {
      console.log(row.id);

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          const { data } = await deleteTodoList(row.id);
          this.getTodo();
          if (data.code === 0) {
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
    },

    // 获取地址位置
    async getLocation() {
      console.log("地址位置");
      const { data: {city, adcode} } = await getIpInfo({
        key: "153e8c7841cb60d5376f06eec53c7567",
        // ip: "123.112.16.140"
      });
      console.log( city, "data");
      this.city = city;
      this.adcode = adcode;
    },

    async getWeatherInfo () {
      const {data} = await getWeather({
        key: "2d0823d5f3aaa21fadffd3205ab4944b",
        city: "110000",
        extensions: "base",
        output: "json"
      })

      console.log(data, "data=======>")
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
