<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell title="昵称" value="昵称" center class="base-info" :border="false">
        <van-image
          round
          class="avatar"
          width="30"
          height="30"
          slot="icon"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-button type="primary" size="mini" round class="update-btn">编辑资料</van-button>
      </van-cell>
      <van-grid :border="false" class="base-grid">
        <van-grid-item>
          <div slot="text">
            <span slot="icon">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <span slot="icon">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <span slot="icon">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item>
          <div slot="text">
            <span slot="icon">123</span>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
      </van-grid>
      <van-grid :column-num="2">
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item icon="browsing-history-o" text="历史" />
      </van-grid>
      <van-cell title="消息通知" is-link url="/vant/mobile.html" />
      <van-cell title="小爱同学" is-link to="index" />
      <van-cell title="退出登录" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'my'
}
</script>

<style lang="less">
.my-container {
  .my-info {
    background: url('../../assets/img/banner.jpg') no-repeat;
    opacity: 0.9;
    background-size: contain;
    .base-info {
      background: unset;
    }
    .base-grid {
      .van-grid-item__content {
        background-color: unset;
      }
    }
  }
}
</style>
