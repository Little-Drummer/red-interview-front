import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMiscStore = defineStore('misc', () => {
  const feedsScrollPosition = ref(0)

  function changeFeedsScrollPosition(newPosition: number) {
    console.log('changeFeedsScrollPosition', newPosition)
    feedsScrollPosition.value = newPosition
  }

  return { feedsScrollPosition, changeFeedsScrollPosition }
})
