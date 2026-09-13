<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { DEFAULT_LAYOUT, layouts } from '@/layouts'

const route = useRoute()
const layoutComponent = computed(() => {
  const layoutKey = (route.meta.layout ?? DEFAULT_LAYOUT) as keyof typeof layouts
  return layouts[layoutKey]
})
</script>

<template>
  <component :is="layoutComponent" />
</template>

<style scoped></style>
