<template>
  <div class="test-page">
    测试页面
    <el-button type="primary" @click="open1('456')">点击我查看路由</el-button>

    <router-link to="/test/log" tag="button">登录</router-link>
    <router-link to="/test/res" tag="button">注册</router-link>
    <hr />
    <Log v-if="this.$route.path === '/test/log'"></Log>
    <Res v-if="this.$route.path === '/test/res'"></Res>
    <hr />
    <a href="#" class="test-alink test-click">click me =====================</a>
    <a href="#" class="test-alink test-click">click me =====================</a>
    <hr />
    <el-alert
      title="悬浮置顶提示框"
      description="我喝过很烈的酒,也放过不该放的手,从前不会回头,往后不会将就。
    弱肉强食的自然界中，越是兽中之王，越喜欢那种远离兽群，俯视苍生的感觉，人类也如此，因为上位者不会跟卑微者走在一起。
    有利益的地方就自然会让人类这种苍蝇一股脑涌上。
    "
      type="success"
      class="test-alert"
    >
    </el-alert>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >切换第二、第三行的选中状态</el-button
      >
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

    <div class="test-box">盒模型标准</div>
    <div class="test-box1">盒模型ie</div>
    <div class="con-box">
      <div class="box box1">外层包裹父元素解决margin合并问题</div>
    </div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</template>

<script>
import Log from "@/views/test/Log";
import Res from "@/views/test/Res";
export default {
  name: "test",
  data() {
    return {
      routervalue: "",
      log: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
  components: {
    Log,
    Res,
  },
  methods: {
    open1(id) {
      // 页面刷新数据不会丢失 1
      // let id = 123;
      // this.$router.push({
      //   path: `/test/${id}`
      // });

      // ===========>>> 页面刷新数据会丢失2
      // this.$router.push({
      //   name: "user", // ==========> 注意是name
      //   params: {
      //     id: id
      //   }
      // });

      // path匹配 刷新不会丢失
      this.$router.push({
        path: "/user",
        query: {
          id: id,
        },
      });

      this.$notify({
        title: "提示",
        message: `这是一条不会自动关闭的消息, ${this.$router.path}`,
      });
    },
    getPath() {
      // console.log(this.$route.path);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  watch: {
    "$route.path": function(newVal) {
      console.log(this.$route.path);
      if (newVal === "/test/log") {
        console.log("欢迎进入登录页面");
      }
      if (newVal === "/test/res") {
        console.log("欢迎进入注册页面");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.test-page {
  height: auto;
}

.test-alink::selection {
  color: cyan;
}
// .test-alink::before {
//   content: "";
//   display: block;
//   width: 20px;
//   height: 20px;
//   background-color: red;
// }
// .test-alink::after{
//   content: "";
//   display: block;
//   width: 20px;
//   height: 20px;
//   background-color: blue;
// }
// .test-click {
//   color: initial;
// }
.test-alert {
  position: sticky;
  top: -8px;
  z-index: 10;
}
.test-box {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;
  background: cadetblue;
}
.test-box1 {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  padding: 10px;
  margin: 10px;
  background-color: chocolate;
}
.box {
  width: 100px;
  height: 100px;
  margin: 20px;
  background-color: red;
}
.con-box {
  overflow: auto;
}
.box1 {
  margin-bottom: 30px;
}
</style>
