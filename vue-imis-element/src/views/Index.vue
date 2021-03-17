<template>
  <div class="index-container">
    <Home></Home>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Index",
  components: {
    // HelloWorld
    Home
  }
};
</script>
