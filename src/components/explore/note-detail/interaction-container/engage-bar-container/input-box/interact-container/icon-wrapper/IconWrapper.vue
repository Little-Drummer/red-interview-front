<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    iconWrapperClass: string
    isActive?: boolean
    count?: number
  }>(),
  {
    isActive: false,
    count: 0
  }
)

const activeIcon = computed(() => {
  if (props.iconWrapperClass === 'like-wrapper') {
    return 'mdi:heart'
  } else if (props.iconWrapperClass === 'collect-wrapper') {
    return 'clarity:favorite-solid'
  } else if (props.iconWrapperClass === 'chat-wrapper') {
    return 'iconamoon:comment-dots-light'
  } else {
    return 'ph:share'
  }
})
const unActiveIcon = computed(() => {
  if (props.iconWrapperClass === 'like-wrapper') {
    return 'mdi-light:heart'
  } else if (props.iconWrapperClass === 'collect-wrapper') {
    return 'clarity:favorite-line'
  } else if (props.iconWrapperClass === 'chat-wrapper') {
    return 'iconamoon:comment-dots-light'
  } else {
    return 'ph:share'
  }
})
const iconColor = computed(() => {
  if (props.iconWrapperClass === 'like-wrapper') {
    return '#ff2e4d'
  } else {
    return '#FDBC5F'
  }
})
const count = computed(() => {
  if (props.count > 9999) {
    return (props.count / 10000).toFixed(2) + 'w'
  } else {
    return props.count
  }
})
</script>

<template>
  <span :class="iconWrapperClass">
    <Icon
      v-if="!isActive"
      :icon="unActiveIcon"
      :width="24"
      class="reds-icon like-icon"
    />
    <!--    激活时状态-->
    <Icon
      v-else
      :icon="activeIcon"
      :color="iconColor"
      :width="24"
      class="reds-icon like-icon"
    />
    <span class="count" v-if="iconWrapperClass != 'share-wrapper'">
      {{ count }}</span
    >
  </span>
</template>

<style scoped lang="less">
@import '@/assets/var';
.buttons.engage-bar-style .chat-wrapper,
.buttons.engage-bar-style .collect-wrapper,
.buttons.engage-bar-style .like-wrapper,
.buttons.engage-bar-style .share-wrapper {
  padding: 0 8px;
}

.like-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.collect-wrapper {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: @color-primary-label;
}
.chat-wrapper {
  cursor: pointer;
  color: @color-primary-label;
  display: flex;
  align-items: center;
}
.share-wrapper {
  position: relative;
}
.count {
  margin-left: 4px;
  margin-right: 0;
  font-weight: 500;
  font-size: 14px;
}
</style>
