<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import type { Ref } from 'vue'
// 注入TextareaContent
const textareaContent = inject<Ref<string>>('TextareaContent', ref(''))
// 当用户输入时更新TextareaContent的值
const updateValue = (event: Event) => {
  let target = event.target as HTMLElement
  textareaContent.value = target.innerText
}

const pRef = ref()

// 监听textareaContent变化，但避免在用户输入时重置光标
watch(textareaContent, (newValue) => {
  if (document.activeElement !== pRef.value) {
    // 检查当前是否聚焦在<p>上
    // 只有当<p>不是当前聚焦元素时才更新内容，避免打断用户输入
    pRef.value.innerHTML = newValue
  }
})
const setFocus = () => {
  pRef.value?.focus()
}
defineExpose({ setFocus })
// 监听textareaContent变化，以便外部变化能实时反映在组件内
// watch(textareaContent, (newValue) => {
//   // 确保内容实时更新，可在这里处理复杂逻辑（如果需要）
// })
</script>

<template>
  <p
    ref="pRef"
    contenteditable="true"
    class="content-input"
    id="content-textarea"
    @input="updateValue"
    @click="setFocus"
  ></p>
</template>

<style scoped lang="less">
@import '@/assets/var';

.content-input {
  cursor: text;
  caret-color: @color-red;
  margin: 0;
  width: 100%;
  min-height: 40px;
  max-height: 100px;
  background-color: @color-active-background;
  border: none;
  padding: 9px 16px;
  border-radius: 20px;
  outline: none;
  overflow-y: auto;
  text-rendering: optimizeLegibility;
  word-break: break-all;
  white-space: break-spaces;
  font-size: 16px;
  line-height: 22px;
  color: @color-primary-label;
}
</style>
