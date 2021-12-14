<template>
  <div class="order-details">
    <header class="order-details-title font-lg">订单详情</header>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
    ></sky-card>
    <!-- <sky-shop-card
      price="2.00"
      desc="8GB+256GB"
      title="Redmi K40骁龙870三星AMOLED 120Hz高刷直屏小米红米 晴雪 游戏电竞智能5G 4800万高清三摄相机"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    ></sky-shop-card> -->
    <sky-shop-card
      v-for="(item, index) of shopCar"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="item.thumb"
      :key="index"
      :num="item.number"
    ></sky-shop-card>
    <div class="sky-shop-info">
      <div class="info-item">
        <span>运费</span>
        <span>123</span>
      </div>
      <div class="info-item">
        <span>订单总额</span>
        <span>123</span>
      </div>
      <div class="info-item">
        <span>优惠券折扣</span>
        <span>123</span>
      </div>
      <div class="info-item">
        <span>应付款</span>
        <span>123</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderDetails',
  data() {
    return {
      menuList: {
        username: '越前龙马',
        mobile: '19888888888',
        address: '法国的普罗旺斯区天海海角小区三单元701号 '
      },
      shopCar: [
        {
          price: '2.00',
          desc: '无描述',
          title: '商品标题',
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          number: '1'
        },
        {
          price: '2.00',
          desc: '我是东山啊',
          title: '手机',
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          number: '1'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.order-details {
  .order-details-title {
    text-align: center;
  }
  /*
    TODO: 修改组件样式
  */
  .border-bottom {
    border: 0;
  }
  .sky-shop-info {
    display: flex;
    flex-direction: column; // align-items: center;
    font-size: 18px;
    background-color: #fff;
    margin: 0 10px;
    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 5px;
      &:nth-child(1) {
        color: gray;
      }
      &:nth-child(2) {
        color: gray;
      }
      &:nth-child(3) {
        color: gray;
      }
      &:nth-child(4) {
        font-weight: 700;
      }
    }
  }
}
</style>
