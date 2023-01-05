<script lang="ts" setup>
import NoticeCard from "./notice/notice-card.vue";

export interface PropsType {
  hidden: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  hidden: true,
});
</script>
<template>
  <div :hidden="props.hidden">
    <div class="aminion-notice-container">
      <NoticeCard v-for="x in [1, 2, 3, 4, 5, 6, 7, 8]"></NoticeCard>
    </div>

    <button class="aminion-collect-refresh-btn">刷新</button>
  </div>
</template>
<style scoped>
.aminion-notice-container {
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
  .aminion-notice-container {
    height: 25rem;
  }
}

.aminion-notice-container::-webkit-scrollbar {
  width: 2px;
}

.aminion-notice-container::-webkit-scrollbar-thumb {
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
