<script setup lang="ts">
import DropDownItem from '@/components/header/DropDownItem.vue'
const frontend = 'https://github.com/Little-Drummer/red-interview-front'
const backend = 'https://github.com/Little-Drummer/red-interview-api'
const demo = 'https://redbook.yjxw.win/'
const blog = 'https://blog.yjxw.win/'
</script>

<template>
  <div class="header-menu">
    <el-dropdown
      popper-class="dropdown-nav"
      trigger="hover"
      class="header-menu-but"
      :teleported="false"
    >
      <span class="el-dropdown-link">项目地址</span>
      <template #dropdown>
        <el-dropdown-menu>
          <drop-down-item content="前端地址" :to="frontend" />
          <drop-down-item content="后端地址" :to="backend" />
          <drop-down-item content="演示地址" :to="demo" />
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-dropdown
      popper-class="dropdown-nav"
      class="header-menu-but"
      :teleported="false"
    >
      <span class="el-dropdown-link">关于我</span>
      <template #dropdown>
        <el-dropdown-menu>
          <drop-down-item content="个人博客" :to="blog" />
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
    .el-dropdown-link {
      &:hover,
      &:focus {
        outline: none;
        cursor: pointer;
      }
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
            justify-content: space-between;
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
      span {
        display: none;
      }
      a {
        color: inherit;
      }
    }
  }
}
</style>
