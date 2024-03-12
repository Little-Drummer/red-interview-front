<script setup lang="ts">
import { TopRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
const headerMenuItemHover = ref(true)

const props = defineProps(['content', 'to'])
</script>

<template>
  <el-dropdown-item
    @mousemove="headerMenuItemHover = true"
    @mouseleave="headerMenuItemHover = false"
  >
    <a
      target="_blank"
      class="flex w-full items-center justify-between"
      :href="props.to"
      >{{ props.content }}
      <el-icon v-show="headerMenuItemHover"> <top-right /> </el-icon
    ></a>
  </el-dropdown-item>
</template>

<style scoped lang="less"></style>
