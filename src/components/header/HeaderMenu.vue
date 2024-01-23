<script setup lang="ts">
import { TopRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="header-menu">
    <el-dropdown
      popper-class="dropdown-nav"
      trigger="click"
      class="header-menu-but"
      :teleported="false"
    >
      <span class="el-dropdown-link">创作中心</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <a href="#">创作服务</a>
          </el-dropdown-item>
          <el-dropdown-item><a href="#">直播管理</a></el-dropdown-item>
          <el-dropdown-item>
            <a href="#">电脑直播助手</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown popper-class="dropdown-nav" class="header-menu-but" :teleported="false">
      <span class="el-dropdown-link">业务合作</span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <a href="#">专业号</a>
            <el-icon>
              <top-right />
            </el-icon>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">推广合作</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">蒲公英</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">商家入驻</a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">MCN入住</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped lang="less">
@but-hover-color: #f7f7f7;
.header-menu {
  display: flex;
  .header-menu-but {
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    padding: 0 16px;
    align-items: center;
    border-radius: 12px;
    &:hover {
      background-color: @but-hover-color;
    }
    ::v-deep(.dropdown-nav) {
      //border-radius: 999px;
      background-color: #f7f7f7;
      min-width: 192px;
      max-width: 202px;
      border-radius: 12px;
      .el-scrollbar {
        &:hover {
          background-color: #f7f7f7;
        }
        border-radius: 12px;
        .el-dropdown-menu {
          padding: 0;
          .el-dropdown-menu__item {
            width: 100%;
            height: 40px;
            color: inherit;
            font-size: 16px;
            &:hover {
              background-color: #f7f7f7;
              color: #333;
            }
          }
        }
        //.el-scrollbar__wrap,
        //.el-dropdown__list {
        //  &:hover {
        //    .el-dropdown-menu__item {
        //      background-color: #f7f7f7;
        //    }
        //  }
        //}
      }
      //span {
      //  display: none;
      //}
      a {
        color: inherit;
      }
    }
  }
}
</style>
