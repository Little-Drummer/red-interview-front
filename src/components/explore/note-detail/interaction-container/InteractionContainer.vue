<script setup lang="ts">
import AuthorContainer from '@/components/explore/note-detail/interaction-container/author-container/AuthorContainer.vue'
import type { Author } from '@/type/noteType.ts'
import NoteContent from '@/components/explore/note-detail/interaction-container/note-content/NoteContent.vue'
import CommentsEl from '@/components/explore/note-detail/interaction-container/comments-el/CommentsEl.vue'
import EngageBarContainer from '@/components/explore/note-detail/interaction-container/engage-bar-container/EngageBarContainer.vue'

const props = defineProps<{
  authorDetail: Author
  isFollow: boolean
  noteContent: string
  noteDate: string
  commentsTotal: number
}>()
</script>

<template>
  <div class="interaction-container">
    <author-container
      :author-detail="authorDetail"
      @onFollow="$emit('onFollow')"
      :is-follow="isFollow"
    ></author-container>
    <div class="note-scroller">
      <note-content :note-content="noteContent" :note-date="noteDate" />
      <div class="interaction-divider divider"></div>
      <comments-el :total="commentsTotal" />
    </div>
    <div class="interactions engage-bar">
      <engage-bar-container />
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.interaction-container {
  flex-shrink: 0;
  border-radius: 0 20px 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background-color: @elevation-note-background;
  overflow: hidden;
  border-left: 1px solid @color-border;
  width: @interaction-width;
}

.note-scroller {
  transition: scroll 0.4s;
  overflow-y: scroll;
  flex-grow: 1;
}

.interaction-divider {
  margin: 0 24px;
}

.interactions {
  flex-shrink: 0;
  padding: 12px 24px 24px;
  height: 142px;
  border-top: 1px solid @color-border;
  flex-basis: 130px;
  z-index: 1;
}
.engage-bar {
  padding: 16px 16px 0;
  flex-basis: unset;
  height: unset;
}
</style>
