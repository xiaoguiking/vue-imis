<template>
  <div class="sky-card-container">
    <div class="sky-card-header"></div>
    <div class="sky-card-content pg-6">
      <div class="d-inline font-lg pr-10">{{ username }}</div>
      <div class="d-inline font-lg">{{ mobile }}</div>
      <div class="font-lg border-bottom ptb-10">{{ address }}</div>
    </div>
    <div class="sky-card-bottom" v-if="operate">
      <div class="sky-card-operate d-flex jc-end font-xs ptb-10">
        <sky-button-common type="edit" iconfont="icon-imisedit" @click="handleEdit"
          >编辑</sky-button-common
        >
        <sky-button-common type="delete" iconfont="icon-imisdelete" @click="handleDelete"
          >删除</sky-button-common
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkyCard',
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
    },
    operate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: 'Card'
    }
  },
  methods: {
    handleEdit() {
      // this.$emit('onHandleEdit', this.msg)
      console.log('edit')
    },
    handleDelete() {
      // console.log('delete')
      console.log('delete')
    }
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
