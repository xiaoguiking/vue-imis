<template>
  <div class="my-address">
    <header class="title">我的地址</header>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
    ></sky-card>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
    ></sky-card>
    <sky-card
      :username="menuList.username"
      :mobile="menuList.mobile"
      :address="menuList.address"
    ></sky-card>
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
        username: '疾步',
        mobile: '19888888888',
        address: '法国的普罗旺斯区天海海角小区三单元701号 '
      }
    }
  },
  methods: {},

}
</script>

<style lang="less" scoped>
.my-address {
  // background-color: darkgrey;
  .title {
    text-align: center;
    font-size: 20px;
  }
}
</style>
