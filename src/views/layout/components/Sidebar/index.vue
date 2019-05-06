<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="false"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  },
  created(){
    console.log(this.$router.options.routes);
  },
  mounted() {
    console.log(this.$router.options.routes);
  }
}
</script>
