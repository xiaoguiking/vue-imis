<template>
  <div class="publish-article">
    <el-card>
      <div slot="header">
        发布文章
      </div>
      <div>
        <el-form ref="article" :model="article" label-width="80px">
          <el-form-item label="标题">
            <el-input v-model="article.name"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input type="textarea" v-model="article.desc"></el-input>
          </el-form-item>
            <!-- <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker
                placeholder="选择时间"
                v-model="form.date2"
                style="width: 100%"
              ></el-time-picker>
            </el-col>
          </el-form-item> -->
            <el-form-item label="频道">
              <el-select v-model="channelId" placeholder="请选择文章频道">
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
            <el-form-item label="封面">
              <el-radio-group v-model="article.cover.type">
                <el-radio :label="-1">自动</el-radio>
                <el-radio :label="0">无图</el-radio>
                <el-radio :label="1">1张</el-radio>
                <el-radio :label="3">三张</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-button type="primary" @click="onPublish(false)">发布文章</el-button>
            <el-button @click="onPublish(true)">存入草稿</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
// import {addArticleList, getChannels,} from "@/api/article.js"

export default {
  name: "PublishArticle",
  data() {
    return {
      form: {
        name: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        title: "",
      },
      article: {
        name: "",
        price: "",
        desc:"",

        typename:"",
        typeid:"",
        img:"",
        status:"",
        cover: {
          images: [],
          type: 0,  // 封面类型 -1自动 0 无图  11张 3张
        }

      },
      channels: [
        {
          id: 1,
          name: "数码",
        },
        {
          id: 2,
          name: "科技",
        },
        {
          id: 3,
          name: "思想",
        },
        {
          id: 4,
          name: "军事",
        },
        {
          id: 5,
          name: "言情",
        },
        {
          id: 6,
          name: "水文",
        },
        {
          id: 7,
          name: "游记",
        },
      ],
      channelId: null, // 查询文章频道
    };
  },
  created () {
    this.loadChannels();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

    // 加载频道
    async loadChannels () {
      // const {data} = await getChannels;
      // this.channels = data;
    },

    // 发布文章
    async onPublish (draft=false) {
      console.log(this.article,draft, "art")
      this.$message({
        type: "success",
        message: "发布成功"
      })
    }
  },
};
</script>

<style lang="less" scoped></style>
