<script setup lang="ts">
import ChannelContainer from '@/components/explore/ChannelContainer.vue'
import FeedsContainer from '@/components/explore/FeedsContainer.vue'
import { onActivated, onDeactivated } from 'vue'
import { useMiscStore } from '@/stores/modules/misc.ts'

const MiscStore = useMiscStore()
onDeactivated(() => {
  let scrollTop = document.getElementsByClassName('el-main')[0]?.scrollTop
  MiscStore.changeFeedsScrollPosition(scrollTop ? scrollTop : 0)
})
onActivated(() => {
  let element = document.getElementsByClassName('el-main')[0]
  element.scroll(0, MiscStore.feedsScrollPosition)
})
</script>

<template>
  <div id="mfContainer" class="feeds-page">
    <channel-container />
    <!--    <Transition mode="out-in">-->
    <!--      <KeepAlive>-->
    <Suspense>
      <feeds-container />
      <template #fallback>
        <el-skeleton
          :animated="true"
          :loading="true"
          :rows="5"
          style="display: flex; flex-wrap: wrap"
        >
          <template #template>
            <div
              v-for="item in 15"
              :key="item"
              style="
                display: flex;
                height: 320px;
                flex-direction: column;
                margin-right: 24px;
              "
            >
              <el-skeleton-item
                variant="image"
                style="width: 250px; height: 364px"
              >
              </el-skeleton-item>
              <div style="padding: 14px">
                <el-skeleton-item variant="h3" style="width: 50%" />
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 16px;
                    height: 16px;
                  "
                >
                  <el-skeleton-item variant="text" style="margin-right: 16px" />
                  <el-skeleton-item variant="text" style="width: 30%" />
                </div>
              </div>
            </div>
          </template>
        </el-skeleton>
      </template>
    </Suspense>
    <!--      </KeepAlive>-->
    <!--    </Transition>-->
  </div>
</template>

<style scoped lang="less">
.feeds-page {
  //overflow-y: scroll;
  padding: 72px 32px 0;
}
</style>
