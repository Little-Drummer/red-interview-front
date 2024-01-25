<script setup lang="ts">
import HeaderContainer from '@/components/header/HeaderContainer.vue'
import SideBar from '@/components/side-bar/SideBar.vue'
import BottomBar from '@/components/side-bar/BottomBar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-container />
      </el-header>
      <el-container>
        <el-row>
          <el-col :xs="0" :sm="0" :md="24" :lg="24" :xl="24">
            <!--            <el-aside width="266.66px">-->
            <side-bar />
            <!--            </el-aside>-->
          </el-col>
        </el-row>
        <el-main>
          <!--          <div class="main">123</div>-->
          <div class="main-content with-side-bar">
            <router-view></router-view>
          </div>
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

.el-main {
  padding: 0;
  .main-content {
    width: 100%;
  }
  @media screen and (min-width: 1728px) {
    .main-content.with-side-bar {
      padding-left: 282.66667px;
    }
  }

  @media screen and (min-width: 1424px) and (max-width: 1727px) {
    .main-content.with-side-bar {
      padding-left: calc(-5.33333px + 16.66667vw);
    }
  }

  @media screen and (min-width: 1192px) and (max-width: 1423px) {
    .main-content.with-side-bar {
      padding-left: calc(-4.8px + 20vw);
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1191px) {
    .main-content.with-side-bar {
      padding-left: calc(-6px + 25vw);
    }
  }
}
</style>
