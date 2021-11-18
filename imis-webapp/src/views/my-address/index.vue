<template>
  <div class="my-address">
    <header class="title">我的地址</header>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
      @onHandleEdit="onHandleEdit"
      operate
    ></sky-card>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
      operate
    ></sky-card>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
      operate
    ></sky-card>
    <footer class="my-address-footer">
      <div class="my-address-footer-text font-md">新增收货地址</div>
    </footer>
  </div>
</template>

<script>
import SkyCard from '../../components/SkyCard/index.vue'

export default {
  name: 'my-address',
  components: { SkyCard },
  data() {
    return {
      menuList: {
        username: '越前龙马',
        mobile: '19888888888',
        address: '法国的普罗旺斯区天海海角小区三单元701号 '
      }
    }
  },
  methods: {
    onHandleEdit(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
.my-address {
  // background-color: darkgrey;
  .title {
    text-align: center;
    font-size: 20px;
  }
  .my-address-footer {
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0px;
    margin: 20px;
    box-sizing: border-box;
    height: 30px;

    .my-address-footer-text {
      padding: 10px 30px;
      background-color: #583e11;
      opacity: 0.5;
      border-radius: 5px;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
