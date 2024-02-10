<script setup lang="ts">
// import 'vue-waterfall-plugin-next/dist/style.css'
// import { getPhotoService } from '@/api/unsplash.ts'
// import { ref, onMounted } from 'vue'
// import blurHashToImageSrc from '@/utils/blruHashToImageSrc.ts'
import WaterFall from '@/components/explore/WaterFall.vue'
import { getPostsWithImagesAuthorService } from '@/api/posts.ts'
import type { Post } from '@/type/noteType.ts'

// interface PostItem {
//   id: string
//   title: string
//   content: string
// }

const postsImageAuthorList: Post[] = await getPostsWithImagesAuthorService()

// interface PhotoItem {
//   id: string
//   name: string
//   src: string
//   blur_hash: string
// }
//
// const currentPage = ref(1)
// const keyWord = ref('beautiful girl')
// const pageSize = ref(30)
//
// const unsplash_photos = await getPhotoService(keyWord.value, pageSize.value, currentPage.value)
// console.log(unsplash_photos)
// const list = ref<PhotoItem[]>([])
// onMounted(async () => {
//   list.value = unsplash_photos.results.map((item, index) => {
//     return {
//       id: item.id,
//       name: item.alt_description,
//       src: item.urls.small,
//       blur_hash: blurHashToImageSrc(item.blur_hash, item.width, item.height)
//     }
//   })
//   console.log(list)
// })
</script>

<template>
  <div id="exploreFeeds" class="feeds-container">
    <water-fall :note-list="postsImageAuthorList" />
  </div>
</template>

<style scoped lang="less">
.feeds-container {
  //background-color: gray;
  width: 100%;
  height: 100vh;
  visibility: visible;

  position: relative;
  transition: width 0.5s;
  margin: 0 auto;
}
</style>
