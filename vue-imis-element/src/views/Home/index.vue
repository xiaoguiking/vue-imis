<template>
  <div class="index-container">
    <header class="index-title">
      vue-imis-element page
    </header>
    <div class="box-container">
      <el-card class="box-card" v-for="(item, index) of homelist" :key="index">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <!-- <div v-for="o in 4" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div> -->
        <!-- <div class="text item" v-for="(icontent, index) of item.content" :key="index">
        {{icontent}}
      </div> -->
        <div class="text item">
          {{ item.content }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      homelist: [
        {
          title: "快速入门",
          content: "vue-imis-element"
        },
        {
          title: "反馈",
          content: "快速使用手册"
        },
        {
          title: "置顶菜单",
          content: "快速使用手册"
        },
        {
          title: "快速入门",
          content: "快速使用手册"
        },
        {
          title: "快速入门",
          content: "快速使用手册"
        },
        {
          title: "快速入门",
          content: "快速使用手册"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  gap: 20px 10px;
}
  .index-container {
    .index-title {
      font-size: 30px;
      font-weight: 700;
      padding-top: 10px;
      padding-bottom: 20px;
    }
  }

</style>
