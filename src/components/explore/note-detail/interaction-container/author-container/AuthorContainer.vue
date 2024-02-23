<script setup lang="ts">
import AuthorInfo from '@/components/explore/note-detail/interaction-container/author-container/AuthorInfo.vue'
import type { Author } from '@/type/noteType.ts'
import AuthorFollow from '@/components/explore/note-detail/interaction-container/author-container/AuthorFollow.vue'
const props = defineProps<{
  authorDetail: Author
  isFollow: boolean
}>()
</script>

<template>
  <div class="author-container">
    <div class="author-wrapper">
      <author-info
        :author-id="authorDetail.authorId"
        :author-name="authorDetail.name"
        :profile-picture-url="authorDetail.profilePictureUrl"
      />
      <author-follow :is-follow="isFollow" @onFollow="$emit('onFollow')" />
    </div>
  </div>
</template>

<style scoped lang="less">
.author-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  height: 100%;
  border-bottom: 1px solid transparent;
}
</style>
