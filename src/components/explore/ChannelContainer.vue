<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const currentChannel = ref('homefeed_recommend')
// console.log(route)
watch(
  () => route.query,
  (to) => {
    if (to.channel_id && typeof to.channel_id === 'string') {
      currentChannel.value = to.channel_id
    } else {
      currentChannel.value = ''
    }
  }
)

const channelList = [
  { channel_name: '推荐', channel_id: 'homefeed_recommend' }
  // { channel_name: '穿搭', channel_id: 'homefeed.fashion_v3' },
  // { channel_name: '美食', channel_id: 'homefeed.food_v3' },
  // { channel_name: '彩妆', channel_id: 'homefeed.cosmetics_v3' },
  // { channel_name: '影视', channel_id: 'homefeed.movie_and_tv_v3' },
  // { channel_name: '职场', channel_id: 'homefeed.career_v3' },
  // { channel_name: '情感', channel_id: 'homefeed.love_v3' },
  // { channel_name: '家居', channel_id: 'homefeed.household_product_v3' },
  // { channel_name: '游戏', channel_id: 'homefeed.gaming_v3' },
  // { channel_name: '旅行', channel_id: 'homefeed.travel_v3' },
  // { channel_name: '健身', channel_id: 'homefeed.fitness_v3' }
]

const change_channel = (channel_id: string) => {
  router.push({ name: 'explore', query: { channel_id } })
}
</script>

<template>
  <div class="channel-container">
    <!--    <div class="reds-sticky-box sticky">-->
    <div class="reds-sticky-box">
      <div class="reds-sticky">
        <div class="scroll-container channel-scroll-container">
          <div class="content-container">
            <div
              class="channel"
              v-for="item in channelList"
              :key="item.channel_name"
              :class="{ active: item.channel_id === currentChannel }"
              @click="change_channel(item.channel_id)"
            >
              {{ item.channel_name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@feeds-width: 1381.33333px;
.channel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;

  .reds-sticky-box {
    height: 72px;

    .reds-sticky {
      top: 72px;
      position: fixed;
      z-index: 5;
      width: 100%;
      box-sizing: border-box;
      background: var(--mask-paper);

      .channel-scroll-container {
        backdrop-filter: blur(20px);
        background-color: transparent;
        width: @feeds-width;
        position: relative;
        overflow: hidden;
        display: flex;
        user-select: none;
        -webkit-user-select: none;
        align-items: center;
        font-size: 16px;
        color: var(--color-secondary-label);
        //height: 40px;
        white-space: nowrap;
        height: 72px;
      }
    }
  }
}

.content-container {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  color: rgba(51, 51, 51, 0.8);

  &::-webkit-scrollbar {
    background-color: var(--color-background);
    width: 0;
    height: 0;
  }

  .channel {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
  }

  .active {
    font-weight: 600;
    background: rgba(0, 0, 0, 0.03);
    border-radius: 999px;
    color: #333;
  }
}
</style>
