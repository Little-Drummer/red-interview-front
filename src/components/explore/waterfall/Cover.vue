<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

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
const coverStyle = computed(() => ({
  height: `${props.height}px`,
  background: `url(${props.imageUrl}) center center / cover no-repeat`
}))

onMounted(() => {
  const img = new Image()
  img.src = props.imageUrl
  img.onload = () => {
    isImageLoaded.value = true
  }
})
</script>

<template>
  <router-link
    to="to"
    :style="coverStyle"
    class="cover mask"
    :class="{ ld: isImageLoaded }"
  ></router-link>
</template>

<style scoped lang="less"></style>
