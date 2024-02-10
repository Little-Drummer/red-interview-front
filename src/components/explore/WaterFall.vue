<script setup lang="ts">
import { ref } from 'vue'
import type { Post } from '@/type/noteType.ts'
// const props = defineProps({
//   noteList: Object as PropType<Post[]>
// })
const props = withDefaults(
  defineProps<{
    noteList: Post[]
    gap?: number
  }>(),
  {
    gap: () => 32
  }
)
// console.log(props.noteList)
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
const isLoading = ref(false)
const load = () => {
  isLoading.value = true
  console.log(123)
  // testData.value.push({ id: 39, color: 'red', height: '100px' })
  // console.log(testData.value)
}
</script>

<template>
  <!--  v-infinite-scroll="load"-->
  <!--  :infinite-scroll-distance="0"-->
  <!--  :infinite-scroll-disabled="isLoading"-->
  <section
    v-waterfall
    class="note-item"
    v-for="(item, index) in noteList"
    :key="index"
  >
    <div>
      <router-link
        to="to"
        :style="{
          height: '334px',
          background:
            'url(' +
            item.images[0].imageUrl +
            ') center center / cover no-repeat'
        }"
        class="cover mask ld"
      ></router-link>
      <div class="footer">
        <router-link to="to" class="title">
          <span>{{ item.title }}</span>
        </router-link>
        <div class="author-wrapper">
          <router-link to="to" class="author">
            <el-avatar
              :size="20"
              :src="item.author.profilePictureUrl"
              class="author-avatar"
            >
              <img src="@/assets/author/circle.png" alt="" />
            </el-avatar>
            <span class="name">{{ item.author.name }}</span>
          </router-link>
          <span class="like-wrapper like-active"> </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="less">
@note-item-width: 250.66666666px;
@note-item-border-radius: 16px;
@note-item-backdrop-filter: blur(42.5px);
@color-border: rgba(0, 0, 0, 0.08);
@color-mask-backdrop: rgba(0, 0, 0, 0.25);
@color-primary-label: #333;
@color-secondary-label: rbga(51, 51, 51, 0.8);
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
        color: #999;
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
      .like-wrapper {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      //  .author {
      //    font-size: 14px;
      //    color: #fff;
      //    text-decoration: none;
      //    transition: color 0.2s;
      //    &:hover {
      //      color: #fff;
      //    }
      //  }
    }
  }
}
</style>
