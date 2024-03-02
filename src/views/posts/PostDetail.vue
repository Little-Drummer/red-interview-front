<script setup lang="ts">
import { provide, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Pagination, Mousewheel, Navigation, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { Post } from '@/type/noteType.ts'
import { getPostsDetailService } from '@/api/posts.ts'
import InteractionContainer from '@/components/explore/note-detail/interaction-container/InteractionContainer.vue'

const props = defineProps<{
  postId: number
}>()

const postDetail = ref({} as Post)

const result = await getPostsDetailService(props.postId)
if (result.code === 200) {
  postDetail.value = result.data
}

const emit = defineEmits(['clickOutside'])
const noteContainerRef = ref(null)
const containerWidth = ref(929)
const mediaWidth = ref(487.822)
const containerTransition = ref('transform 0.4s ease 0s,width 0.4s ease 0s')
const containerTransform = ref('translate(300px, 32px) scale(1)')
const containerOverflow = ref('visible')

onClickOutside(noteContainerRef, () => {
  emit('clickOutside')
})

const modules = [Pagination, Mousewheel, Navigation, Keyboard]

const getBackgroundStyle = (imgUrl: string) => {
  return {
    background: `url(${imgUrl}) center center / cover no-repeat`
  }
}

const isFollow = ref(false)
const onFollow = () => {
  console.log('用户点击了关注')
  isFollow.value = !isFollow.value
}

//提供点赞、收藏、评论、数量
provide('likesCount', postDetail.value.likesCount)
provide('favoritesCount', postDetail.value.favoritesCount)
provide('commentsCount', postDetail.value.commentsCount)
</script>

<template>
  <!--  <div-->
  <!--    -->
  <!--    -->
  <!--  >-->
  <!--  <transition name="fade" mode="out-in">-->
  <div
    ref="noteContainerRef"
    id="noteContainer"
    class="note-container"
    :style="{
      width: `${containerWidth}px`,
      transition: containerTransition,
      transform: containerTransform,
      overflow: containerOverflow
    }"
  >
    <div class="media-container" :style="{ width: mediaWidth + 'px' }">
      <div class="slider-container">
        <swiper
          class="note-slider"
          mousewheel
          keyboard
          :pagination="{ clickable: true }"
          navigation
          :modules="modules"
        >
          <swiper-slide
            :key="item.imageId"
            v-for="item in postDetail.images"
            :virtual-index="item.imageId"
            :style="getBackgroundStyle(item.imageUrl)"
          >
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!--    interaction 互动的意思-->
    <interaction-container
      @onFollow="onFollow"
      :author-detail="postDetail.author"
      :isFollow="isFollow"
      :note-content="postDetail.content"
      :note-date="postDetail.createdAt"
      :commentsTotal="0"
    ></interaction-container>
  </div>
  <!--  </transition>-->
  <!--  </div>-->
</template>

<style scoped lang="less">
@import '@/assets/var';

.note-container {
  display: flex;
  box-shadow: @elevation-note-shadow;
  border-radius: 20px;
  background: @elevation-note-background;
  //transform-origin: left top;

  .media-container {
    position: relative;
    background: @color-active-background;
    flex-shrink: 0;
    flex-grow: 0;
    -webkit-user-select: none;
    user-select: none;
    overflow: hidden;
    border-radius: 20px 0 0 20px;
    transform: translateZ(0);
    height: 100%;
    object-fit: contain;
    width: auto;
    min-width: @interaction-width;

    .slider-container {
      width: var(--slider-width);
      height: 100%;
      cursor: pointer;

      .note-slider {
        height: 100%;
      }
    }
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .note-container {
    height: calc(100% - 64px);
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .media-container {
    height: auto !important;
    max-width: calc(100vw - 208px - @interaction-width);
  }
}

@media screen and (min-width: 1424px) and (max-width: 1727px) {
  .slider-container {
    --slider-width: 100%;
  }
}
</style>
