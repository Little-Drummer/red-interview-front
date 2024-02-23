<script setup lang="ts">
import { provide, ref } from 'vue'
import InputBox from '@/components/explore/note-detail/interaction-container/engage-bar-container/input-box/InputBox.vue'
import { Icon } from '@iconify/vue'

// withDefaults(
//   defineProps<{
//     isEngageBarActive: boolean
//   }>(),
//   {
//     isEngageBarActive: false
//   }
// )
const isEngageBarActive = ref(false)
const TextareaContent = ref('')
const interactContainerMarginRight = ref('-293.484375px')
const onEngageBarActiveChange = (activeState: boolean) => {
  if (!activeState) {
    TextareaContent.value = ''
  }
  isEngageBarActive.value = activeState
}

//取消评论条的激活状态
const cancel = () => {
  onEngageBarActiveChange(false)
}

provide('EngageBarActive', { isEngageBarActive, onEngageBarActiveChange })
provide('TextareaContent', TextareaContent)
</script>

<template>
  <div class="engage-bar-container">
    <div
      class="engage-bar"
      :class="{ active: isEngageBarActive }"
      :style="{ '--mr': interactContainerMarginRight }"
    >
      <input-box />
      <div class="bottom">
        <div class="bottom-inner">
          <div class="left-icon-area">
            <div class="icon">
              <Icon icon="ph:at" :width="24"></Icon>
            </div>
            <div class="icon">
              <Icon icon="fluent:emoji-laugh-20-regular" :width="24"></Icon>
            </div>
          </div>
          <div class="right-btn-area">
            <button class="btn submit" :disabled="TextareaContent == ''">
              发送
            </button>
            <button class="btn cancel" @click="cancel">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';
.engage-bar-container {
  width: 100%;
  position: relative;
}
.engage-bar .bottom {
  overflow: hidden;
  transition: all 0.2s;
  height: 0;
  opacity: 0;
  .bottom-inner {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      color: @color-secondary-label;
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    .left-icon-area {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-btn-area {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        margin-left: 8px;
        width: 64px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        border-radius: 44px;
        font-size: 16px;
        font-weight: 600;
        &.submit {
          color: @color-white;
          font-weight: 600;
          background: @color-blue;
        }
        &.cancel {
          border: 1px solid @color-border;
          color: @color-secondary-label;
        }
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
          //background: @color-border;
          //color: @color-tertiary-label;
        }
      }
    }
  }
}
.engage-bar.active .bottom {
  height: 56px;
  opacity: 1;
}
</style>
