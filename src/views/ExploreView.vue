<script setup lang="ts">
import ChannelContainer from '@/components/explore/ChannelContainer.vue'
</script>

<template>
  <div class="main-content with-side-bar">
    <div id="mfContainer">
      <channel-container />
      <div class="test">123</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-content {
  width: 100%;

  #mfContainer {
    //overflow-y: scroll;
    padding: 72px 32px 0;
    .test {
      //overflow: hidden;
      //display: block;
      //height: 1000px;
      background-color: #fff;
    }
  }
}

@media screen and (min-width: 1728px) {
  .main-content.with-side-bar {
    padding-left: 282.66667px;
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .main-content.with-side-bar {
    padding-left: calc(-5.33333px + 16.66667vw);
  }
}

@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .main-content.with-side-bar {
    padding-left: calc(-4.8px + 20vw);
  }
}

@media screen and (min-width: 960px) and (max-width: 1191px) {
  .main-content.with-side-bar {
    padding-left: calc(-6px + 25vw);
  }
}
</style>
