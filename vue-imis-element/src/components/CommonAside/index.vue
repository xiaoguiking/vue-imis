<template>
  <div class="sidebar">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
    >
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">
          <!-- <router-link :to="item.path">{{ item.title }}</router-link> -->
          {{ item.title }}
        </span>
      </el-menu-item>
      <el-submenu index="item.path" v-for="(item, index) in hasChildren" :key="index">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            unique-opened
            @click="clickMenu(subItem)"
          >
            <!-- <router-link :to="subItem.path">{{ subItem.title }}</router-link> -->
            {{ subItem.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { sideMenu } from '@/mock/menuList.js'

export default {
  name: 'CommonAside',
  props: ['is-collapse'],
  data() {
    return {
      asideMenu: [],
      menu: []
      // isCollapse: true
    }
  },

  created() {
    // this.asideMenu = sideMenu;
    // console.log(this.asideMenu, "=======>");
  },

  mounted() {
    this.asideMenu = sideMenu
  },
  computed: {
    noChildren() {
      return this.asideMenu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter((item) => item.children)
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push({ path: item.path })
      return this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border: 0;
}
.sidebar {
  display: block;
  position: fixed;
  left: 0;
  top: 0px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar > ul {
  height: 100%;
}
</style>
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
}
</style>
