<template>
  <div class="sky-button-common mr-8" @click="handleClick">
    <i v-if="iconfont" class="icon" :class="iconfont ? `${iconfont}` : ''"></i>
    <span class="plr-2" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SkyButtonCommon',
  props: {
    type: {
      type: String,
      default: null
    },
    iconfont: {
      type: String,
      default: null
    }
  },
  created() {
    // console.log(this.type, 'type')
    // console.log(this.$slots, 'slots')
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less"></style>
