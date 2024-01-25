<script setup lang="ts">
import sideBarItem from '@/components/side-bar/SideBarItem.vue'
import SolarHomeSmileAngleLinear from '@/components/icon/SolarHomeSmileAngleLinear.vue'
import TablerSquareRoundedPlus from '@/components/icon/TablerSquareRoundedPlus.vue'
import BxBell from '@/components/icon/BxBell.vue'
import UserAvatar from '@/components/side-bar/UserAvatar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const currentRoute = ref('')

watch(
  () => router.path,
  (to) => {
    currentRoute.value = to
  }
)

const sideBarItemContent = [
  {
    icon: SolarHomeSmileAngleLinear,
    title: '发现',
    to: '/explore'
  },
  {
    icon: TablerSquareRoundedPlus,
    title: '发布',
    to: '/publish'
  },
  {
    icon: BxBell,
    title: '通知',
    to: '/notification'
  },
  {
    icon: UserAvatar,
    title: '我',
    to: '/user'
  }
]
</script>

<template>
  <el-row>
    <el-col>
      <div class="side-bar">
        <ul class="channel-list">
          <li
            v-for="item in sideBarItemContent"
            :key="item.title"
            :class="{ 'active-channel': item.to === currentRoute }"
          >
            <side-bar-item :to="item.to" :title="item.title">
              <template #icon>
                <Component :is="item.icon"></Component>
              </template>
            </side-bar-item>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="less">
@color-active-background: rgba(0, 0, 0, 0.03);
.side-bar {
  width: 266.66667px;
  margin-left: 16px;
  height: calc(100vh - 72px);
  //overflow-y: scroll;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 16px;
  margin-top: 72px;
  position: fixed;
  overflow: visible;

  .channel-list {
    min-height: auto;
    -webkit-user-select: none;
    user-select: none;

    .active-channel {
      background-color: @color-active-background;
    }

    li {
      border-radius: 999px;
      padding-left: 16px;
      min-height: 48px;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 8px;
      color: rgba(51, 51, 51, 0.6);

      &:hover {
        background-color: @color-active-background;
      }
    }
  }
}
</style>
