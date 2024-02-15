<script setup lang="ts">
import { computed, onMounted, ref, nextTick } from 'vue'

const props = withDefaults(
  defineProps<{
    imageUrl: string
    height?: number
  }>(),
  {
    height: 334
  }
)
const isImageLoaded = ref(false)
const isIntersecting = ref(false) // 新增，用于追踪元素是否进入视口
const coverStyle = computed(() => ({
  height: `${props.height}px`,
  background:
    isImageLoaded.value && isIntersecting.value
      ? `url(${props.imageUrl}) center center / cover no-repeat`
      : ''
}))
const cover = ref()
onMounted(async () => {
  const img = new Image()
  // img.src = isIntersecting.value ? props.imageUrl : ''
  // img.src = props.imageUrl
  img.onload = () => {
    isImageLoaded.value = true
  }
  // 创建Intersection Observer来监听元素是否进入视口
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isIntersecting.value = true
        img.src = props.imageUrl
        // 图片已经加载，且元素进入视口，我们可以停止观察
        if (isImageLoaded.value) {
          observer.unobserve(entry.target)
        }
      }
    })
  })
  await nextTick(() => {
    if (cover.value.$el) {
      observer.observe(cover.value.$el)
    }
  })
})
</script>

<template>
  <router-link
    ref="cover"
    to="to"
    :style="coverStyle"
    class="cover mask"
    :class="{ ld: isImageLoaded }"
  ></router-link>
</template>

<style scoped lang="less"></style>
