<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const searchText = ref('')
const search = () => {
  console.log(searchText.value)
}
</script>

<template>
  <div class="header-search">
    <el-form class="search-form">
      <el-form-item class="search-text">
        <el-input
          maxlength="30"
          v-model="searchText"
          class="search-input"
          clearable
          placeholder="搜索"
          @keydown.enter.stop.prevent="search"
        ></el-input>
      </el-form-item>
      <el-form-item class="search-but">
        <el-button
          :icon="Search"
          @click.stop.prevent="search"
          @keydown.enter.prevent.stop="search"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
@header-search-height: 40px;
@header-search-background: rgb(247, 247, 247);
.header-search {
  width: 100%;
  height: @header-search-height;
  border: 1px solid #ebebeb;
  background: @header-search-background;
  border-radius: 999px;

  .search-form {
    height: 100%;
    display: flex;
    padding: 0 0 0 5px;
    justify-content: space-between;

    .search-text {
      width: 100%;
      background: @header-search-background;
      margin-bottom: 0;
      border-radius: 999px;

      .search-input {
        background-color: transparent;

        ::v-deep(input) {
          color: #333;
        }

        font-size: 16px;
        ::v-deep(.el-input__wrapper) {
          background-color: transparent;
          box-shadow: none !important;
        }
        width: 100%;
        height: 100%;
      }
    }

    .search-but {
      background-color: rgba(0, 0, 0, 0);
      height: 100%;
      margin: 0;

      :hover,
      :focus {
        color: black;
      }

      ::v-deep(button) {
        padding: 0 15px 0 5px;
        background-color: transparent;
        border: none;
      }

      ::v-deep(.el-icon) {
        font-size: 19px;
      }
    }
  }
}
</style>
