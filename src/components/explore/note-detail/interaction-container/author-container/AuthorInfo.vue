<script setup lang="ts">
const props = defineProps<{
  authorId: number
  profilePictureUrl: string
  authorName: string
}>()

const authorProfileUrl = '/user/profile/' + props.authorId
</script>

<template>
  <div class="info">
    <a :href="authorProfileUrl" target="_blank">
      <el-avatar :size="40" :src="profilePictureUrl">
        <img src="@/assets/author/circle.png" alt="" />
      </el-avatar>
    </a>
    <a :href="authorProfileUrl" target="_blank" class="name">
      <span class="author-name">
        {{ authorName }}
      </span>
    </a>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
.info {
  display: flex;
  align-items: center;
  overflow: hidden;

  .name {
    padding-left: 12px;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: @color-secondary-label;
    overflow: hidden;
    .author-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
