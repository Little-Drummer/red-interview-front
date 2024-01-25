<script setup lang="ts"></script>

<template>
  <div id="exploreFeeds" class="feeds-container">
    <section class="note-item" v-for="i in 10" :key="i">
      <div>
        <a href="" class="cover ld mask" :style="{ height: '334px', backgroundColor: 'red' }">
          {{ i }}
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped lang="less">
.feeds-container {
  background-color: gray;
  width: 100%;
  height: 1735px;
  visibility: visible;

  position: relative;
  transition: width 0.5s;
  margin: 0 auto;
}

.note-item {
  --1e87e864: 250.66666666666666px;
  --6afaa17e: 16px;
  --1719550c: blur(42.5px);
  //transform: translate(0px, 0px);
  //position: absolute;
  left: 0;
  top: 0;
  width: var(--1e87e864);
  .cover {
    position: relative;
    width: var(--1e87e864);
    display: flex;
    border-radius: var(--6afaa17e);
    overflow: hidden;
    box-shadow: 0 0 0 1px var(--color-border);
    transition: background 0.2s;
    transform: translateZ(0);
  }
}
</style>
