<script setup lang="ts">
import ListContainer from '@/components/explore/note-detail/interaction-container/comments-el/list-container/ListContainer.vue'

withDefaults(
  defineProps<{
    total: number
  }>(),
  {
    total: 0
  }
)
</script>

<template>
  <div class="comments-el">
    <div class="comments-container">
      <div class="total">共 {{ total }} 条评论</div>
      <!--      评论组件-->
      <list-container />
      <div class="end-container">- 没有更多了 -</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.comments-el {
  position: relative;

  .comments-container {
    padding: 16px;

    .total {
      font-size: 14px;
      color: @color-tertiary-label;
      margin-left: 8px;
      margin-bottom: 12px;
    }

    .end-container {
      display: flex;
      justify-content: center;
      margin-top: 24px;
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 16px;
      color: @color-tertiary-label;
    }
  }
}
</style>
