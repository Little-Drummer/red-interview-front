<script setup lang="ts">
import ExploreHeader from '@/components/header/ExploreHeader.vue'
import SideBar from '@/components/side-bar/SideBar.vue'
import BottomBar from '@/components/side-bar/BottomBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <explore-header />
      </el-header>
      <el-container>
        <el-row>
          <el-col :xs="0" :sm="0" :md="24" :lg="24" :xl="24">
            <!--            <el-aside width="266px">-->
            <side-bar />
            <!--            </el-aside>-->
          </el-col>
        </el-row>
        <el-main>
          <div class="main"></div>
        </el-main>
      </el-container>
      <el-affix position="bottom" :offset="0" target="body">
        <el-col :xs="23" :sm="23" :md="0">
          <bottom-bar></bottom-bar>
        </el-col>
      </el-affix>
    </el-container>
  </div>
</template>

<style scoped lang="less">
//.main {
//  height: 200vh;
//}
.el-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 72px;
  position: fixed;
  padding: 0;
  left: 0;
  top: 0;
  z-index: 10;
  align-items: center;
}
</style>
