<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  isFollow: boolean
}>()

const isFollowText = computed(() => {
  return !props.isFollow ? '关注' : '已关注'
})
</script>

<template>
  <div>
    <button
      class="follow-button reds-button-new large"
      :class="{ outlined: isFollow, primary: !isFollow }"
      @click="$emit('onFollow')"
    >
      <span class="reds-button-new-box">
        <span class="reds-button-new-text">{{ isFollowText }}</span>
      </span>
    </button>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.follow-button {
  width: 96px;
}

.reds-button-new.outlined {
  background: transparent;
  border: 1px solid @color-border;
  color: @color-secondary-label;
}
</style>
