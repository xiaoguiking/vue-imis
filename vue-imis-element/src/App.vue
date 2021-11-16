<template>
  <div id="app">
    <!-- <router-link to="/log">Home</router-link> |
      <router-link to="/res">About</router-link> -->
         <router-view />
  </div>
</template>
<script>
// export default {
//   watch: {
//   "$route.path": function(newVal) {
//     if (newVal === "/log") {
//       console.log("欢迎进入登录页面");
//     }
//     if (newVal === "/res") {
//       console.log("欢迎进入注册页面");
//     }
//   }
//   },

// };
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
