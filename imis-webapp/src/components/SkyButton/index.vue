<template>
  <button class="sky-button inlineBlock text-center mr-5 font-md" :class="[`sky-button-${type}`]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'SkyButton',
  props: {
    type: {
      type: String,
      default: 'init'
    }
  },
  created() {
    console.log(this.type, 'type')
  }
}
</script>

<style lang="less">
.sky-button {
  user-select: none;
  padding: 5px 15px;
  color: #130d0d;
  &:hover {
    color: aqua;
  }
}

.sky-button-init {
  border: 1px solid darkgrey;
}
.sky-button-info {
  border: 1px solid rgb(49, 49, 163);
  color: rgb(49, 49, 163);
}
.sky-button-primary {
  border: 1px solid rgb(17, 230, 17);
  color: rgb(17, 230, 17);
}
</style>
