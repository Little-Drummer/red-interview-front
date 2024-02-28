<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PostPage } from '@/type/noteType.ts'
import FeedsFooter from '@/components/explore/waterfall/footer/FeedsFooter.vue'
import CoverImage from '@/components/explore/waterfall/CoverImage.vue'
import PostDetail from '@/views/posts/PostDetail.vue'
import PostMask from '@/components/explore/PostMask.vue'

const sectionRef = ref()
const coverImageRef = ref()
const noteItemWidth = ref(217.33333)
const noteItemWidthPx = computed(() => `${noteItemWidth.value}px`)
// const noteItemWidthPx = ref('217.33333px')
const showDetail = ref(false)
const props = withDefaults(
  defineProps<{
    noteListPage: PostPage
    gap?: number
    isNoMore?: boolean
  }>(),
  {
    gap: () => 32,
    isNoMore: false
  }
)
const noteList = computed(() => props.noteListPage.records)
const columnHeights = ref([0, 0, 0, 0, 0])

const vWaterfall = (el: HTMLElement) => {
  // console.log(el, el.className, el.classList)
  if (el.className === 'no-more') {
    updateNoMore(el)
    return
  }
  // const callback = binding.value
  // callback(el)
  updateLayout(el)
}

const updateLayout = (item: HTMLElement) => {
  const minColumn = columnHeights.value.indexOf(
    Math.min(...columnHeights.value)
  ) // 当前高度最小的列
  const itemTop = columnHeights.value[minColumn] // 当前高度最小的列的高度
  const itemLeft = minColumn * item.clientWidth // 当前高度最小的列的索引 * 列宽
  // console.log(itemLeft)
  item.style.transform = `translate(${itemLeft + minColumn * props.gap}px, ${itemTop}px)` // 设置元素位置
  columnHeights.value[minColumn] += item.offsetHeight // 更新当前列的高度
}
const updateNoMore = (item: HTMLElement) => {
  const maxColumn = columnHeights.value.indexOf(
    Math.max(...columnHeights.value)
  )
  // console.log(columnHeights.value, maxColumn)
  const itemTop = columnHeights.value[maxColumn]
  // console.log(itemTop)
  item.style.transform = `translate(0px,${itemTop}px)`
}

const PostDetailId = ref<number>(122)
const goPostDetail = (index: number, postId: number) => {
  // let sectionElement = sectionRef.value[index]
  let coverImageElement = coverImageRef.value[index].$el
  //获取元素的位置
  // let sectionRect = sectionElement.getBoundingClientRect()
  let coverImageRect = coverImageElement.getBoundingClientRect()
  sectionX.value = `${coverImageRect.left - 350}px`
  sectionY.value = `${coverImageRect.top - 150}px`

  // document.startViewTransition(() => {
  window.history.pushState({}, '', `/explore/${postId}`)
  // 更改文章ID
  PostDetailId.value = postId
  console.log('goDetail', postId)
  // router.push({
  //   name: 'postDetail',
  //   params: {
  //     postId: postId
  //   }
  // })
  showDetail.value = true
  // 添加键盘监听事件
  window.addEventListener('keyup', onKeyUp)
  // })
}
const ClickOutSide = () => {
  // document.startViewTransition(() => {
  window.history.pushState({}, '', '/explore')
  showDetail.value = false
  // 移除键盘监听事件
  window.removeEventListener('keyup', onKeyUp)
  // })
}
const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    ClickOutSide()
  }
}

const sectionX = ref('300px')
const sectionY = ref('32px')
// 计算位置
</script>

<template>
  <section
    ref="sectionRef"
    v-waterfall
    class="note-item"
    v-for="(item, index) in noteList"
    :key="item.postId"
    v-memo="item.postId"
    :style="{ width: noteItemWidthPx }"
  >
    <div>
      <cover-image
        ref="coverImageRef"
        @click="goPostDetail(index, item.postId)"
        :image-url="item.images[0].imageUrl"
        :height="Number.parseInt(item.images[0].imageHeight) / 5"
        :style="{ width: noteItemWidthPx }"
      />
      <feeds-footer
        :title="item.title"
        :name="item.author.name"
        :profile-picture-url="item.author.profilePictureUrl"
        :likes-count="item.likesCount"
        :is-like="false"
      />
    </div>
  </section>
  <p v-if="isNoMore" class="no-more" v-waterfall>没有更多了</p>

  <teleport to=".main-content">
    <!--    <transition name="fade" @before-enter="onBeforeEnter" @leave="onLeave">-->
    <post-mask v-if="showDetail">
      <template #default>
        <transition name="fade">
          <post-detail
            v-if="showDetail"
            :postId="PostDetailId"
            @clickOutside="ClickOutSide"
          ></post-detail>
        </transition>
      </template>
    </post-mask>
    <!--    </transition>-->
  </teleport>
</template>

<style scoped lang="less">
@import '@/assets/var';
//@note-item-width: v-bind(noteItemWidthPx);
//@note-item-width: 250.66666666px;
//@note-item-width: ;
@note-item-border-radius: 16px;
@note-item-backdrop-filter: blur(42.5px);
@color-border: rgba(0, 0, 0, 0.08);

.note-item {
  //width: v-bind(noteItemWidthPx);
  //width: @note-item-width;
  position: absolute;
  left: 0;
  top: 0;

  .cover {
    position: relative;
    //width: @note-item-width;
    //width: v-bind(noteItemWidthPx);
    display: flex;
    border-radius: @note-item-border-radius;
    overflow: hidden;
    box-shadow: 0 0 0 1px @color-border;
    transition: background 0.2s;
    transform: translateZ(0);

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: background-color 0.2s;
      background-color: transparent;
      border-radius: @note-item-border-radius;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: @note-item-backdrop-filter;
      z-index: 1;
      transition: all 0.4s;
      border-radius: @note-item-border-radius;
    }

    &.ld:before {
      background: transparent;
      backdrop-filter: blur(0);
    }
  }

  .mask:hover:after {
    background-color: @color-mask-backdrop;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    border-radius: @note-item-border-radius;
  }
}

.no-more {
  position: absolute;
  left: 0;
  top: 0;
  //bottom: 50px;
  font-size: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: @note-item-border-radius;
  //box-shadow: 0 0 0 1px @color-border;
  color: var(--el-color-danger);
  user-select: none;
  background: var(--el-color-danger-light-9);
}

//.fade-enter-from,
//.fade-leave-to {
//  opacity: 0;
//}
//
///* 过渡进入的结束状态 */
//.fade-enter-to,
//.fade-leave-from {
//  opacity: 1;
//}

//过渡的激活状态
.fade-enter-active {
  animation: bounce-in 1s ease-in;
}

//.fade-leave-from,
//.fade-leave-to,
//.fade-leave-active {
//  animation: bounce-in 5s reverse;
//}

@keyframes bounce-in {
  0% {
    position: fixed;
    left: v-bind(sectionX);
    top: v-bind(sectionY);
    //transform: translate(300px, 32px) scale(0);
    transform: scale(0);
  }
  100% {
    position: fixed;
    //left: v-bind(sectionX);
    //top: v-bind(sectionY);
    top: 32px;
    left: 300px;
    transform: scale(1);
    //transform: translate(300px, 32px) scale(1);
  }
}
</style>
