<script setup lang="ts">

defineOptions({
  name: 'SideBar',
})
</script>

<template>
  <el-menu>
    <el-menu-item index="/homepage">主页</el-menu-item>
    <el-sub-menu>
      <el-menu-item></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
</style>
