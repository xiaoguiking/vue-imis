<template>
  <div class="order-details">
    <header class="order-details-title font-lg">订单详情</header>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
    ></sky-card>
    <sky-shop-card
      price="2.00"
      desc="8GB+256GB"
      title="Redmi K40骁龙870三星AMOLED 120Hz高刷直屏小米红米 晴雪 游戏电竞智能5G 4800万高清三摄相机"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    ></sky-shop-card>
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
          desc: '描述信息',
          title: '商品标题',
          thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg'
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
}
</style>
