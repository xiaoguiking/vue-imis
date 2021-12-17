<template>
  <el-card>
    <div>
      <div class="message-page-con message-category-con">
        <el-menu :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1">
            <el-badge :value="12" class="item category-title" :count="messageUnreadCount">
              <el-button size="small" autofocus>未读消息</el-button>
            </el-badge>
          </el-menu-item>
          <el-menu-item index="2">
            <el-badge :value="10" class="item category-title" type="info">
              <el-button size="small">已读消息</el-button>
            </el-badge>
          </el-menu-item>
          <el-menu-item index="3">
            <el-badge :value="2" class="item category-title" type="info">
              <el-button size="small">回收站</el-button>
            </el-badge>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="message-page-con message-list-con">标题</div>
      <div class="message-page-con message-view-con">内容</div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'MessagePage',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(index) {
      console.log(index)
      this.activeIndex = index
    }
  },
  computed: {},
  mounted() {}
}
</script>

<style lang="less">
.message-page {
  &-con {
    height: ~'calc(100vh - 176px)';
    display: inline-block;
    vertical-align: top;
    position: relative;
    &.message-category-con {
      width: 200px;
      border-right: 1px solid #e6e6e6;
      .el-menu {
        .is-active:after {
          content: '';
          display: block;
          width: 2px;
          position: absolute;
          top: 0;
          bottom: 0;
          right: -2px;
          background: #409eff;
        }
      }
    }
    &.message-list-con {
      width: 230px;
      border-right: 1px solid #e6e6e6;
    }
  }
}
</style>
