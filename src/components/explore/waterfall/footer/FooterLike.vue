<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = withDefaults(
  defineProps<{
    isLike: boolean
    likesCount: number
  }>(),
  {
    isLike: false,
    likesCount: 0
  }
)
</script>

<template>
  <span class="like-wrapper like-active" @click="$emit('changeLike')">
    <Icon
      v-if="!isLike"
      icon="mdi-light:heart"
      :width="16"
      class="reds-icon like-icon"
    />
    <Icon
      v-else
      icon="mdi:heart"
      color="#dc2626"
      :width="16"
      class="reds-icon like-icon"
    />
    <span class="count">{{ likesCount }}</span>
  </span>
</template>

<style scoped lang="less">
@import '@/assets/var';
.like-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  .reds-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
  }
  &:hover {
    color: @color-primary-label;
  }
  .count {
    margin-left: 2px;
  }
}
</style>
