<script setup lang="ts">
const maskBackdrop = 'rgba(0, 0, 0, 0.5)'
const maskTransition = 'background-color 0.4s ease 0s'
</script>

<template>
  <div
    class="note-detail-mask"
    :style="{ background: maskBackdrop, transition: maskTransition }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
//& {
//  --mask-backdrop: v-bind(maskBackdrop);
//}

.note-detail-mask {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  overflow: auto;
}
</style>
