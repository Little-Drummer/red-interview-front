<script setup lang="ts">
const props = defineProps<{
  noteContent: string
  noteDate: string
}>()

const date = new Date(props.noteDate).toLocaleDateString()
</script>

<template>
  <div class="note-content">
    <div id="detail-desc" class="desc">
      <span>{{ noteContent }}</span>
    </div>
    <div class="bottom-container">
      <span class="date">{{ date }}</span>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '@/assets/var';

.note-content {
  padding: 0 24px 24px;
  color: @color-primary-label;
}
.desc {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: @color-primary-label;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.date {
  font-size: 14px;
  line-height: 120%;
  color: @color-tertiary-label;
}
</style>
