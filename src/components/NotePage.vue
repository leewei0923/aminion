<script setup lang="ts">
import NoteCard from "./note/NoteCard.vue";

const props = defineProps({
    hidden: {type: Boolean, required: true}
})
</script>

<template>
  <div :hidden="props.hidden">
    <div class="aminion-note-page-container">
      <NoteCard v-for="s in [1, 2, 3, 4, 5, 6, 7, 8]"></NoteCard>
    </div>

    <button class="aminion-collect-refresh-btn">刷新</button>
  </div>
</template>

<style scoped>
.aminion-note-page-container {
  width: 250px;
  height: 32rem;
  background-color: var(--normal_background);
  transform: translate(-20px, 40px);
  border-radius: var(--border_radius_midle);
  display: flex;
  row-gap: 8px;
  flex-direction: column;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
}

@media (max-height: 640px) {
  .aminion-note-page-container {
    height: 25rem;
  }
}

.aminion-note-page-container::-webkit-scrollbar {
  width: 2px;
}

.aminion-note-page-container::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.aminion-collect-refresh-btn {
  height: 30px;
  width: 100px;
  background-color: var(--deep_blue_800);
  position: absolute;
  bottom: 100px;
  left: 50px;
  border-radius: var(--border_radius_small);
  color: #fff;
  outline: none;
  border: none;
  font-weight: 400;
  letter-spacing: 2px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  animation: var(--animation_btn_throttle);
}

.aminion-collect-refresh-btn:active {
  background-color: var(--deep_blue_500);
  animation: none;
}
</style>
