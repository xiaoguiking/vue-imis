<template>
  <div class="tags tag">
    <ul>
      <li class="tags-li active">
        <router-link :to="current.path" class="tags-li-title">{{
          current.title
        }}</router-link>
        <span class="tags-li-icon" @click="closeTags">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Tags",
  methods: {
    closeTags() {
      console.log("tags");
    }
  },
  computed: {
    ...mapState({
      current: state => {
        return state.tab.currentMenu;
      }
      //   tabList,
      //   showTags
    })
  }
};
</script>

<style lang="less" scoped>
.tags {
    position: relative;
    height: 50px;
    overflow: hidden;
    background: #fff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #ddd;

    ul { 
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  .tags-li {
    float: left;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 23px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
  
  .tags-li-icon {
    cursor: pointer;
    
  }
}
</style>
