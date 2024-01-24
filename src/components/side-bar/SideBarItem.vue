<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <router-link :to="props.to" class="link-wrapper">
    <el-icon :size="24">
      <slot name="icon"></slot>
    </el-icon>
    <span class="channel">
      {{ title }}
    </span>
  </router-link>
</template>

<style scoped lang="less">
.link-wrapper {
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  .channel {
    font-size: 16px;
    font-weight: 600;
    margin-left: 12px;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }
}
</style>
