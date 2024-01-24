<script setup lang="ts"></script>

<template>
  <div class="channel-container">
    <div class="reds-sticky-box sticky">
      <div class="reds-sticky">推荐</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.channel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;
  .reds-sticky-box {
    height: 72px;
    .reds-sticky {
      top: 72px;
      position: fixed;
      z-index: 10010;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
