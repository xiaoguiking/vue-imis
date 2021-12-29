<template>
  <div class="publish-article">
    <el-card>
      <div slot="header">
        {{ $route.query.id ? '编辑文章' : '发布文章' }}
      </div>
      <div>
        <el-form ref="article" :model="article" label-width="80px" :rules="formRules">
          <el-form-item label="标题" prop="name">
            <el-input v-model="article.name" placeholder="请输入文章标题"></el-input>
          </el-form-item>
          <!-- <el-form-item label="内容">
            <el-input type="textarea" v-model="article.desc"></el-input>
          </el-form-item> -->
          <el-form-item label="内容" prop="desc">
            <div>
              <el-tiptap v-model="article.desc" :extensions="extensions" />
            </div>
          </el-form-item>
          <el-form-item label="price">
            <el-input type="input" v-model="article.price"></el-input>
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
          <el-form-item label="封面">
            <el-radio-group v-model="article.cover.type">
              <el-radio :label="-1">自动</el-radio>
              <el-radio :label="0">无图</el-radio>
              <el-radio :label="1">1张</el-radio>
              <el-radio :label="3">三张</el-radio>
            </el-radio-group>
            <div class="image-cover">
              <template v-if="article.cover.type > 0">
                <upload-cover v-for="cover in article.cover.type" :key="cover" :class="cover" />
              </template>
            </div>
          </el-form-item>
          <el-form-item label="文章状态">
            <el-select v-model="article.status" placeholder="请选择文章状态">
              <el-option
                v-for="articleStatus in articleStatusList"
                :key="articleStatus.id"
                :label="articleStatus.name"
                :value="articleStatus.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
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

          <el-button type="primary" @click="onPublish(false)">
            {{ $route.query.id ? '编辑文章' : '发布文章' }}
          </el-button>
          <el-button @click="onPublish(true)">存入草稿</el-button>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
// getChannels
// import { ElementTiptap } from 'element-tiptap'

import {
  // 需要的 extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  ElementTiptap
} from 'element-tiptap'
import { addArticleList, getArticleById, updateArticle } from '@/api/article.js'

import UploadCover from '@/components/UploadCover'

export default {
  name: 'PublishArticle',
  data() {
    return {
      article: {
        name: '',
        price: '',
        desc: '',
        typename: '思想',
        typeid: 2,
        img: '',
        status: 0,
        cover: {
          images: [],
          type: 0 // 封面类型 -1自动 0 无图  11张 3张
        }
      },
      articleStatusList: [
        {
          id: 0,
          name: '草稿'
        },
        {
          id: 1,
          name: '待审核'
        },
        {
          id: 2,
          name: '审核通过'
        },
        {
          id: 3,
          name: '审核失败'
        },
        {
          id: 4,
          name: '已删除'
        }
      ],
      channels: [
        {
          id: 1,
          name: '数码'
        },
        {
          id: 2,
          name: '科技'
        },
        {
          id: 3,
          name: '思想'
        },
        {
          id: 4,
          name: '军事'
        },
        {
          id: 5,
          name: '言情'
        },
        {
          id: 6,
          name: '水文'
        },
        {
          id: 7,
          name: '游记'
        }
      ],
      channelId: null, // 查询文章频道
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
        new Underline({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList()
      ],
      formRules: {
        name: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 5, max: 30, message: '输入的字符在5-30之间', trigger: 'blur' }
        ],
        desc: [
          // { required: true, message: "请输入文章内容", trigger: "blur" }
          // 使用自定义校验解决p标签存在问题
          {
            validator(rule, value, callback) {
              console.log(value, 'value')
              if (value === '<p></p>') {
                callback(new Error('请输入内容'))
              } else {
                // 验证通过
                callback()
              }
            }
          }
        ],
        status: [{ required: true, message: '请输入文章标题' }]
      }
    }
  },
  components: {
    'el-tiptap': ElementTiptap,
    'upload-cover': UploadCover
  },
  created() {
    this.loadChannels()
    // 判断编辑文章/ 创建文章
    if (this.$route.query.id) {
      console.log(this.$route.query.id)
      this.loadArticle()
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },

    // 加载频道
    async loadChannels() {
      // const {data} = await getChannels;
      // this.channels = data;
    },

    // 加载指定id对应内容
    async loadArticle() {
      const {
        data: { book }
      } = await getArticleById(this.$route.query.id)
      this.article = book
    },

    // 发布文章或者编辑文章
    onPublish(draft = false) {
      const bookId = this.$route.query.id
      this.$refs.article.validate(async (valid) => {
        if (!valid) {
          console.log('无value')
        } else {
          // eslint-disable-next-line no-lonely-if
          if (bookId) {
            // 编辑文章
            const {
              data: { error, message }
            } = await updateArticle(bookId, {
              book: {
                name: this.article.name,
                desc: this.article.desc
              },
              draft
            })
            if (error === '0') {
              this.$message({
                type: 'success',
                message
              })
            }
            console.log(error, message, '编辑')
          } else {
            // 添加文章
            addArticleList({
              book: {
                name: this.article.name,
                desc: this.article.desc,
                price: this.article.price,
                typename: this.article.typename,
                typeid: this.article.typeid,
                img: '/images/book13.jpg',
                status: this.article.status
              }
            }).then((res) => {
              const {
                data: { error, message }
              } = res
              if (error === '0') {
                this.$message({
                  type: 'success',
                  message
                })
              }
            })
          }
          // setTimeout(() => {
          //   this.$router.push("/content");
          // }, 1000 * 3);
        }
      })
      console.log('发布')
    }
  }
}
</script>

<style lang="less" scoped>
.image-cover {
  display: flex;
  justify-content: space-between;
}
</style>
