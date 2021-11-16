<template>
  <div class="sky-card-container">
    <div class="sky-card-header"></div>
    <div class="sky-card-content pg-6">
      <!-- <template #tags> -->
      <!-- <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag> -->
      <!-- </template> -->
      <!-- <template #footer> -->
      <!-- <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button> -->
      <!-- </template> -->
      <div class="d-inline font-lg pr-10">{{ username }}</div>
      <div class="d-inline font-lg">{{ mobile }}</div>
      <div class="font-lg border-bottom ptb-10">{{ address }}</div>
    </div>
    <div class="sky-card-bottom">
      <!-- <slot></slot> -->
      <div class="sky-card-operate d-flex jc-end font-xs ptb-10">
        <div class="pr-10">编辑</div>
        <div class="pr-10">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    username: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
    // icon: {
    //   type: String,
    //   required: true
    // }
  }
}
</script>

<style lang="less" scoped>
.sky-card-container {
  margin: 10px;
  padding-top: 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #fff;
}
</style>
