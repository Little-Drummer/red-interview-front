<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  noteList: {
    type: Array,
    default: () => []
  }
})

const testData = ref([
  { id: 1, color: 'red', height: '100px' },
  { id: 2, color: 'blue', height: '200px' },
  { id: 3, color: 'green', height: '300px' },
  { id: 4, color: 'yellow', height: '165px' },
  { id: 5, color: 'purple', height: '245px' },
  { id: 6, color: 'orange', height: '140px' },
  { id: 7, color: 'pink', height: '280px' },
  { id: 8, color: 'brown', height: '185px' },
  { id: 9, color: 'gray', height: '320px' },
  { id: 10, color: 'teal', height: '90px' },
  { id: 11, color: 'maroon', height: '230px' },
  { id: 12, color: 'navy', height: '120px' },
  { id: 13, color: 'olive', height: '350px' },
  { id: 14, color: 'lime', height: '210px' },
  { id: 15, color: 'fuchsia', height: '260px' },
  { id: 16, color: 'aqua', height: '175px' },
  { id: 17, color: 'silver', height: '300px' },
  { id: 18, color: 'black', height: '200px' },
  { id: 19, color: 'white', height: '150px' },
  { id: 20, color: 'red', height: '100px' },
  { id: 21, color: 'blue', height: '200px' },
  { id: 22, color: 'green', height: '300px' },
  { id: 23, color: 'yellow', height: '165px' },
  { id: 24, color: 'purple', height: '245px' },
  { id: 25, color: 'orange', height: '140px' },
  { id: 26, color: 'pink', height: '280px' },
  { id: 27, color: 'brown', height: '185px' },
  { id: 28, color: 'gray', height: '320px' },
  { id: 29, color: 'teal', height: '90px' },
  { id: 30, color: 'maroon', height: '230px' },
  { id: 31, color: 'navy', height: '120px' },
  { id: 32, color: 'olive', height: '350px' },
  { id: 33, color: 'lime', height: '210px' },
  { id: 34, color: 'fuchsia', height: '260px' },
  { id: 35, color: 'aqua', height: '175px' },
  { id: 36, color: 'silver', height: '300px' },
  { id: 37, color: 'black', height: '200px' },
  { id: 38, color: 'white', height: '150px' }
])
const columnHeights = ref([0, 0, 0, 0, 0])
const gap = 32

const vWaterfall = (el: HTMLElement) => {
  // const callback = binding.value
  // callback(el)
  updateLayout(el)
}

const updateLayout = (item: HTMLElement) => {
  const minColumn = columnHeights.value.indexOf(Math.min(...columnHeights.value)) // 当前高度最小的列
  const itemTop = columnHeights.value[minColumn] // 当前高度最小的列的高度
  const itemLeft = minColumn * item.clientWidth // 当前高度最小的列的索引 * 列宽
  // console.log(itemLeft)
  item.style.transform = `translate(${itemLeft + minColumn * gap}px, ${itemTop}px)` // 设置元素位置
  columnHeights.value[minColumn] += item.offsetHeight // 更新当前列的高度
}
const isLoading = ref(false)
const load = () => {
  isLoading.value = true
  console.log(123)
  // testData.value.push({ id: 39, color: 'red', height: '100px' })
  // console.log(testData.value)
  setTimeout(() => {
    testData.value.push(
      { id: 39, color: 'red', height: '100px' },
      { id: 40, color: 'blue', height: '200px' },
      { id: 41, color: 'green', height: '300px' },
      { id: 42, color: 'yellow', height: '165px' },
      { id: 43, color: 'purple', height: '245px' },
      { id: 44, color: 'orange', height: '140px' },
      { id: 45, color: 'pink', height: '280px' },
      { id: 46, color: 'brown', height: '185px' },
      { id: 47, color: 'gray', height: '320px' },
      { id: 48, color: 'teal', height: '90px' },
      { id: 49, color: 'maroon', height: '230px' },
      { id: 50, color: 'navy', height: '120px' },
      { id: 51, color: 'olive', height: '350px' },
      { id: 52, color: 'lime', height: '210px' },
      { id: 53, color: 'fuchsia', height: '260px' },
      { id: 54, color: 'aqua', height: '175px' },
      { id: 55, color: 'silver', height: '300px' },
      { id: 56, color: 'black', height: '200px' },
      { id: 57, color: 'white', height: '150px' }
    )
    columnHeights.value = [0, 0, 0, 0, 0]
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <!--  v-infinite-scroll="load"-->
  <!--  :infinite-scroll-distance="0"-->
  <!--  :infinite-scroll-disabled="isLoading"-->
  <section
    v-infinite-scroll="load"
    v-waterfall
    class="note-item"
    v-for="(item, index) in testData"
    :key="index"
    :style="{ background: item.color, height: item.height }"
  >
    <p class="test">{{ item.id }}</p>
  </section>
</template>

<style scoped lang="less">
.note-item {
  width: 228.8px;
  position: absolute;
  left: 0;
  top: 0;
}

//.note-item {
//  --1e87e864: 250.66666666666666px;
//  --6afaa17e: 16px;
//  --1719550c: blur(42.5px);
//  //transform: translate(0px, 0px);
//  //position: absolute;
//  left: 0;
//  top: 0;
//  width: var(--1e87e864);
//
//  .cover {
//    position: relative;
//    width: var(--1e87e864);
//    display: flex;
//    border-radius: var(--6afaa17e);
//    overflow: hidden;
//    box-shadow: 0 0 0 1px var(--color-border);
//    transition: background 0.2s;
//    transform: translateZ(0);
//  }
//}
</style>
