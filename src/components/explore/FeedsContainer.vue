<script setup lang="ts">
import WaterFall from '@/components/explore/waterfall/WaterFall.vue'
import { getPostsWithImagesAuthorPageService } from '@/api/posts.ts'
import type { PostPage } from '@/type/noteType.ts'
import { ref } from 'vue'
const pageSize = 15
const pageNumber = ref(1)
const postsImageAuthorList = ref({} as PostPage)
postsImageAuthorList.value = await getPostsWithImagesAuthorPageService(
  pageNumber.value,
  pageSize
)
console.log(postsImageAuthorList)

const isLoading = ref(false)
const load = async () => {
  pageNumber.value++
  let postPage = await getPostsWithImagesAuthorPageService(
    pageNumber.value,
    pageSize
  )
  postsImageAuthorList.value.records.push(...postPage.records)
  // isLoading.value = true
  console.log(123)
  // testData.value.push({ id: 39, color: 'red', height: '100px' })
  // console.log(testData.value)
}
</script>

<template>
  <div id="exploreFeeds" class="feeds-container" v-infinite-scroll="load">
    <water-fall :note-list-page="postsImageAuthorList" />
  </div>
</template>

<style scoped lang="less">
.feeds-container {
  width: 100%;
  height: 100vh;
  visibility: visible;

  position: relative;
  transition: width 0.5s;
  margin: 0 auto;
}
</style>
