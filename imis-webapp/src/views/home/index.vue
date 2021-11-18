<template>
  <div class="home-container">
    home page
    <router-link tag="div" to="/store-name">购物车</router-link>
    <router-link tag="div" to="/my-address">我的地址</router-link>
    <router-link tag="div" to="/order-details">订单详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="name" scoped></style>
