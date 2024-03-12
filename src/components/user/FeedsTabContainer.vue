<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import TabContentItem from '@/components/user/TabContentItem.vue'
import EmptyContent from '@/components/user/EmptyContent.vue'

const transformContainerRef = ref<HTMLElement | null>(null)
const feedsTabContainerRef = ref<HTMLElement | null>(null)
const translateX = ref(0)
const translateY = ref(0)

const transformContainerWidth = computed(() => {
  return feedsTabContainerWidth.value * 3
})

const feedsTabContainerWidth = ref<number>(0)
const updateFeedsTabContainerWidth = () => {
  if (feedsTabContainerRef.value) {
    feedsTabContainerWidth.value = feedsTabContainerRef.value.clientWidth
    console.log(feedsTabContainerWidth.value)
    console.log(transformContainerWidth.value)
  }
}
onMounted(() => {
  updateFeedsTabContainerWidth()
  window.addEventListener('resize', updateFeedsTabContainerWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateFeedsTabContainerWidth)
})
</script>

<template>
  <div class="feeds-tab-container" ref="feedsTabContainerRef">
    <div
      class="transform-container"
      ref="transformContainerRef"
      :style="{
        transform: `translateX(${translateX}px) translateY(${translateY}px)`,
        width: transformContainerWidth + 'px'
      }"
    >
      <tab-content-item :tab-content-item-width="feedsTabContainerWidth">
        <el-empty description="你还没有发布任何内容哦1" image="" />
      </tab-content-item>
      <tab-content-item :tab-content-item-width="feedsTabContainerWidth">
        <el-empty description="你还没有发布任何内容哦2" image="" />
      </tab-content-item>
      <tab-content-item :tab-content-item-width="feedsTabContainerWidth">
        <el-empty description="你还没有发布任何内容哦3" image="" />
      </tab-content-item>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
.feeds-tab-container {
  padding-left: @horizontalGapPx;
  .transform-container {
    display: flex;
    will-change: transform;
    transform: translate(0);
    transition: all 0.4s cubic-bezier(0.2, 0, 0.25, 1) 0s;
  }
}
</style>
