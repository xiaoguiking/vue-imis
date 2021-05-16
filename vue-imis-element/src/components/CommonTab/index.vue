<template>
  <div class="tabs">
    <el-tag
      :key="tag.path"
      v-for="tag in tags"
      :closable="tag.title !== '系统首页'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
    >
      {{ tag.title }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput"
      >+ New Tag</el-button
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CommonTab",
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: ""
    };
  },
  methods: {
    ...mapMutations({
      close: "closeTags"
    }),
    handleClose(tag) {
      console.log(tag, "=======>");
      //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.close(tag);
    },

    changeMenu(tag) {
      this.$router.push({ path: tag.path });
      this.$store.commit("selectMenu", tag);
    },

    showInput() {
      this.inputVisible = true;
      //   this.$nextTick(_ => {
      //     this.$refs.saveTagInput.$refs.input.focus();
      //   });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  }
};
</script>

<style lang="less" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
  cursor: pointer;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
