<script setup lang="ts"></script>

<template>
  <div class="reds-sticky-box user-page-sticky">
    <div class="reds-sticky">
      <div class="tertiary center reds-tabs-list reds-tabs-list">
        <div class="reds-tab-item active">
          <span>笔记</span>
        </div>
        <div class="reds-tab-item">
          <span>收藏</span>
        </div>
        <div class="reds-tab-item">
          <span>点赞</span>
        </div>
        <!--        309 373 437-->
        <!--        <div class="active-tag w-64px left-309px"></div>-->
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@media screen and (min-width: 960px) and (max-width: 1191px) {
  .reds-tabs-list {
    width: calc(75vw + 6px);
  }
}
@media screen and (min-width: 1192px) and (max-width: 1423px) {
  .reds-tabs-list {
    width: calc(80vw + 4.8px);
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .reds-tabs-list {
    width: calc(83.33333vw + 5.33333px);
  }
}
@import '@/assets/var';
.user-page-sticky {
  .reds-sticky {
    padding: 16px 0;
    z-index: 5 !important;
    background: @mask-paper;
    .reds-tabs-list {
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      font-size: 16px;
      justify-content: center;
      padding: 0 12px;
      & > .reds-tab-item {
        padding: 0 16px;
        margin-right: 0;
        font-size: 16px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 40px;
        cursor: pointer;
        color: @color-secondary-label;
        white-space: nowrap;
        transition: transform 0.3s cubic-bezier(0.2, 0, 0.25, 1);
        z-index: 1;
        &.active {
          font-weight: 600;
          color: @color-primary-label;
          border-radius: 999px;
          background-color: @color-active-background;
          span {
            font-weight: 600;
          }
        }
      }
      & > .active-tag {
        position: absolute;
        height: 40px;
        bottom: 0;
        background-color: @color-active-background;
        border-radius: 999px;
        pointer-events: none;
      }
    }
  }
}
</style>
