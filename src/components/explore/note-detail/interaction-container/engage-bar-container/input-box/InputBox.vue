<script setup lang="ts">
import InteractContainer from '@/components/explore/note-detail/interaction-container/engage-bar-container/input-box/interact-container/InteractContainer.vue'
import { inject, ref } from 'vue'
import type { Ref } from 'vue'
import EditableP from '@/components/explore/note-detail/interaction-container/engage-bar-container/input-box/EditableP.vue'

const editablePRef = ref(null)
const { isEngageBarActive, onEngageBarActiveChange } = inject<{
  isEngageBarActive: Ref<boolean>
  onEngageBarActiveChange: (activeState: boolean) => void
}>('EngageBarActive', {
  isEngageBarActive: ref(false),
  onEngageBarActiveChange: () => {}
})
const textareaOnclick = () => {
  if (isEngageBarActive.value) {
    return
  }
  onEngageBarActiveChange(true)
  if (editablePRef.value) {
    ;(editablePRef.value as any).setFocus()
  }
}
</script>

<template>
  <div class="input-box">
    <div class="content-edit" @click="textareaOnclick">
      <editable-p ref="editablePRef" />
      <div class="not-active inner-when-not-active" v-if="!isEngageBarActive">
        <div class="inner">
          <el-avatar :size="24" class="icon">
            <img src="@/assets/author/circle.png" alt="" />
          </el-avatar>
          <span>说点什么吧</span>
        </div>
      </div>
    </div>
    <interact-container />
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.input-box {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  transition: all 0.2s;

  .content-edit {
    flex: 1;
    position: relative;
    min-width: 70px;

    .inner-when-not-active {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      left: 0;
      top: 0;
    }
  }
}

.not-active {
  cursor: text;
  width: 100%;
  padding-left: 8px;

  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: @color-tertiary-label;
    font-size: 14px;

    .icon {
      margin-right: 6px;
    }
  }
}
</style>
