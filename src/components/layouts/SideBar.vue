<script setup lang="ts">
defineOptions({
  name: 'SideBar',
})
function outer() {
  let num = 0
  return {
    add: () => num++,
    get: () => num,
  }
}
const num = outer();
for (let i = 0, len = 3; i < len; i++) {
  console.log(i)
  console.log(num.get())
  num.add()
}
</script>

<template>
  <el-button type="warning">warning</el-button>
  <el-button type="text">text</el-button>
  <el-button type="default">default</el-button>
  <el-button type="danger">danger</el-button>
  <el-button type="info">info</el-button>
  <el-button type="primary">primary</el-button>
  <el-button type="success">success</el-button>
</template>

<style scoped></style>
