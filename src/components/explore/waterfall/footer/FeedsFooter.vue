<script setup lang="ts">
import { Icon } from '@iconify/vue'
import FooterLike from '@/components/explore/waterfall/footer/FooterLike.vue'

const props = withDefaults(
  defineProps<{
    title: string
    profilePictureUrl: string
    name: string
    isLike: boolean
    likesCount: number
  }>(),
  {
    isLike: false,
    likesCount: 0
  }
)
const changeLike = () => {
  console.log('changeLike')
}
</script>

<template>
  <div class="footer">
    <router-link to="to" class="title">
      <span>{{ title }}</span>
    </router-link>
    <div class="author-wrapper">
      <router-link to="to" class="author">
        <el-avatar :size="20" :src="profilePictureUrl" class="author-avatar">
          <img src="@/assets/author/circle.png" alt="" />
        </el-avatar>
        <span class="name">{{ name }}</span>
      </router-link>
      <footer-like
        :isLike="isLike"
        :likesCount="likesCount"
        @change-like="changeLike"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
.footer {
  padding: 12px;
  .title {
    margin-bottom: 8px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: @color-primary-label;
  }
  .author-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    color: @color-secondary-label;
    font-size: 12px;
    transition: color 1s;
    .author {
      display: flex;
      align-items: center;
      color: @color-secondary-label;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-right: 12px;
      .author-avatar {
        margin-right: 6px;
      }
      .name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &:hover {
        color: @color-primary-label;
      }
    }
  }
}
</style>
