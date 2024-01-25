<script setup lang="ts">
import ChannelContainer from '@/components/explore/ChannelContainer.vue'
import FeedsContainer from '@/components/explore/FeedsContainer.vue'
</script>

<template>
  <div id="mfContainer" class="feeds-page">
    <channel-container />
    <feeds-container />
  </div>
</template>

<style scoped lang="less">
.feeds-page {
  //overflow-y: scroll;
  padding: 72px 32px 0;

  .test {
    //overflow: hidden;
    //display: block;
    //height: 1000px;
    background-color: #fff;
  }
}
</style>
