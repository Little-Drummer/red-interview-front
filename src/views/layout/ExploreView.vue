<script setup lang="ts">
import ExploreHeader from '@/components/header/ExploreHeader.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <explore-header />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="less">
.el-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 72px;
  //position: fixed;
  padding: 0;
  left: 0;
  top: 0;
  z-index: 10;
  align-items: center;
}
</style>
