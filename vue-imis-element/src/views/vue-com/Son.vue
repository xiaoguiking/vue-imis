<template>
  <div>
    <h3>Son</h3>
    <p>{{ a }}</p>
    <p>{{ b }}</p>
    <p>{{ c }}</p>
  </div>
</template>

<script>
export default {
  name: 'Son',
  data() {
    return {
      a: '',
      b: '',
      c: ''
    }
  },
  mounted() {
    console.log('$attrs', this.$attrs)
    this.a = this.$attrs.message
    this.b = this.$attrs.messageb
    this.c = this.$attrs.messagec
  }
}
</script>

<style lang="less" scoped></style>
