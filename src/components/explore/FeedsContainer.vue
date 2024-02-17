<script setup lang="ts">
import WaterFall from '@/components/explore/waterfall/WaterFall.vue'
import { getPostsWithImagesAuthorPageService } from '@/api/posts.ts'
import type { PostPage } from '@/type/noteType.ts'
import { ref } from 'vue'

const pageSize = 15
const pageNumber = ref(1)
// 用于存储空状态
const isEmpty = ref(false)
// 首次请求数据
const postsImageAuthorList = ref({} as PostPage)
postsImageAuthorList.value = await getPostsWithImagesAuthorPageService(
  pageNumber.value,
  pageSize
)
// 判断首次加载是否为空
if (postsImageAuthorList.value.records.length === 0) {
  isEmpty.value = true
}
// console.log(postsImageAuthorList)

const isNoMore = ref(false)
const load = async () => {
  if (isNoMore.value) {
    return
  }
  pageNumber.value++
  let postPage = await getPostsWithImagesAuthorPageService(
    pageNumber.value,
    pageSize
  )
  if (postPage.pageNumber > postPage.totalPage) {
    isNoMore.value = true
  }
  postsImageAuthorList.value.records.push(...postPage.records)
  // console.log(123)
  // testData.value.push({ id: 39, color: 'red', height: '100px' })
  // console.log(testData.value)
}
</script>

<template>
  <el-empty v-if="isEmpty" description="当前还没有任何笔记，快去上传吧" />
  <div
    v-else
    id="exploreFeeds"
    class="feeds-container"
    v-infinite-scroll="load"
    infinite-scroll-distance="300"
  >
    <water-fall :note-list-page="postsImageAuthorList" :is-no-more="isNoMore" />
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.feeds-container {
  width: 100%;
  height: 85vh;
  visibility: visible;

  position: relative;
  transition: width 0.5s;
  margin: 0 auto;
  //.loading{
  //
  //}
}
</style>
