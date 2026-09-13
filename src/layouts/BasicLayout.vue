<script setup lang="ts">
import SideBar from '@/layouts/component/SideBar.vue'

defineOptions({
  name: 'BasicLayout',
})
</script>

<template>
  <el-container>
    <el-aside>
      <side-bar />
    </el-aside>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style scoped>
</style>
