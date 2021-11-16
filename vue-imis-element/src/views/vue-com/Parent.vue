<template>
  <div>
    <h4>{{ fromChild }}</h4>
    <m-child
      :msg="msg"
      @showMsg="showMsg"
      @clearMsg="clearMsg"
      ref="child"
    ></m-child>
    <m-child
      msg="普通父级传递消息"
      @showMsg="showMsg"
      @clearMsg="clearMsg"
    ></m-child>
  </div>
</template>

<script>
import MChild from "./Child";
export default {
  name: "Parent",
  data() {
    return {
      msg: "父级传递给子级的消息变量",
      fromChild: "",
    };
  },
  components: {
    MChild,
  },
  methods: {
    showMsg(val) {
      console.log(val);
      this.fromChild = val;
    },
    clearMsg(val) {
      this.fromChild = val;
    },
  },
  mounted() {
    // 调用值
    console.log(this.$children[0].msg);
    // 调用方法直接子传父
    console.log(this.$children[0].sendMsg());

    // refs 方式
    console.log("refs", this.$refs.child.msg);
  },
};
</script>

<style lang="less" scoped></style>
