<script setup lang="ts">
import { computed, ref } from 'vue'
import type { PostPage } from '@/type/noteType.ts'
import FeedsFooter from '@/components/explore/waterfall/footer/FeedsFooter.vue'
import CoverImage from '@/components/explore/waterfall/CoverImage.vue'
const props = withDefaults(
  defineProps<{
    noteListPage: PostPage
    gap?: number
  }>(),
  {
    gap: () => 32
  }
)
const noteList = computed(() => props.noteListPage.records)
const columnHeights = ref([0, 0, 0, 0, 0])

const vWaterfall = (el: HTMLElement) => {
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
</script>

<template>
  <!--  v-infinite-scroll="load"-->
  <!--  :infinite-scroll-distance="0"-->
  <!--  :infinite-scroll-disabled="isLoading"-->
  <section
    v-waterfall
    class="note-item"
    v-for="item in noteList"
    :key="item.postId"
    v-memo="item.postId"
  >
    <div>
      <cover-image :image-url="item.images[0].imageUrl" />
      <feeds-footer
        :title="item.title"
        :name="item.author.name"
        :profile-picture-url="item.author.profilePictureUrl"
        :likes-count="item.likesCount"
        :is-like="false"
      />
    </div>
  </section>
</template>

<style scoped lang="less">
@import '@/assets/var';
@note-item-width: 250.66666666px;
@note-item-border-radius: 16px;
@note-item-backdrop-filter: blur(42.5px);
@color-border: rgba(0, 0, 0, 0.08);
@color-mask-backdrop: rgba(0, 0, 0, 0.25);

.note-item {
  width: @note-item-width;
  position: absolute;
  left: 0;
  top: 0;

  .cover {
    position: relative;
    width: @note-item-width;
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
</style>
