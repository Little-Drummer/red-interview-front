<script setup lang="ts">
import UserInfo from '@/components/user/UserInfo.vue'
import TabList from '@/components/user/TabList.vue'
import FeedsTabContainer from '@/components/user/FeedsTabContainer.vue'
</script>

<template>
  <div
    id="userPageContainer"
    class="bg-colorBg flex-1 overflow-x-hidden overflow-y-scroll"
  >
    <user-info />
    <tab-list />
    <feeds-tab-container />
  </div>
</template>

<style scoped lang="less"></style>
