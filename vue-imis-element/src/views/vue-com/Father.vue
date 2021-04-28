<template>
  <div>
    <h3>Father</h3>
    <m-son v-bind="$attrs"></m-son>
  </div>
</template>

<script>
import MSon from "./Son";
export default {
  name: "Father",
  components: {
    MSon
  },
  mounted() {}
};
</script>

<style lang="less" scoped></style>
