<script setup lang="ts">
import Divider from '@/components/user/Divider.vue'

defineProps({
  tabContentItemWidth: {
    type: Number,
    default: 0
  },
  isEmpty: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="tab-content-item"
    :style="{
      width: tabContentItemWidth + 'px',
      height: 'auto',
      overflow: 'hidden'
    }"
  >
    <!--    <el-divider />-->
    <divider v-if="isEmpty" />
    <div
      id="userPostedFeeds"
      :class="{ 'static-layout': isEmpty }"
      class="feeds-container"
      style="width: 100%; height: auto; visibility: visible"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
.tab-content-item {
  padding-top: 1px;
  padding-left: 1px;
}
.feeds-container {
  position: relative;
  transition: width 0.5s;
  margin: 0 auto;
}
.feeds-container.static-layout {
  display: flex;
  justify-content: center;
  grid-gap: @horizontalGapPx;
  gap: @horizontalGapPx;
}
</style>
