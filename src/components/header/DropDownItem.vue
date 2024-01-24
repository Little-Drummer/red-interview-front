<script setup lang="ts">
import { TopRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
const headerMenuItemHover = ref(false)

const props = defineProps(['content'])
</script>

<template>
  <el-dropdown-item
    @mousemove="headerMenuItemHover = true"
    @mouseleave="headerMenuItemHover = false"
  >
    <a href="#">{{ props.content }}</a>
    <el-icon v-show="headerMenuItemHover">
      <top-right />
    </el-icon>
  </el-dropdown-item>
</template>

<style scoped lang="less"></style>
