<template>
  <div class="person-container">
    <el-card>
      <div slot="header">素材管理</div>
      <div style="padding-bottom: 10px" class="image-control">
        <el-radio-group v-model="collect" @change="onChangeCollect">
          <el-radio-button :label="false">全部</el-radio-button>
          <el-radio-button :label="true">收藏</el-radio-button>
        </el-radio-group>
        <el-button type="success" @click="dialogUpload = true"
          >上传素材</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PersonSetting",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
