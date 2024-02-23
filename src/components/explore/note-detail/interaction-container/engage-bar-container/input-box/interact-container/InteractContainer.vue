<script setup lang="ts">
import IconWrapper from '@/components/explore/note-detail/interaction-container/engage-bar-container/input-box/interact-container/icon-wrapper/IconWrapper.vue'
import { inject } from 'vue'
//注入激活状态和数量
const likesCount = inject('likesCount', 0)
const favoritesCount = inject('favoritesCount', 0)
const commentsCount = inject('commentsCount', 0)
</script>

<template>
  <div class="interact-container">
    <div class="buttons engage-bar-style">
      <div class="left">
        <IconWrapper
          :is-active="true"
          :count="likesCount"
          icon-wrapper-class="like-wrapper"
        />
        <IconWrapper
          :is-active="true"
          :count="favoritesCount"
          icon-wrapper-class="collect-wrapper"
        />
        <IconWrapper :count="commentsCount" icon-wrapper-class="chat-wrapper" />
        <IconWrapper icon-wrapper-class="share-wrapper" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.engage-bar.active .interact-container {
  margin-right: var(--mr);
  visibility: hidden;
  opacity: 0;
}

.interact-container {
  width: auto;
  margin-right: 0;
  transition: all 0.2s;
  opacity: 1;

  .buttons.engage-bar-style {
    justify-content: space-around;
    margin-left: 4px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
    }
  }
}
</style>
