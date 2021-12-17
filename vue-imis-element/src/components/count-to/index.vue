<template>
  <div class="count-to-wrapper">
    <slot name="left" />
    <p class="content-router"></p>
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: 'countToItem'
}
</script>

<style lang="less"></style>
