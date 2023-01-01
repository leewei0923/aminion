<script setup lang="ts">
import textCard from "./collect/textCard.vue";
import linkCard from "./collect/linkCard.vue";
import picCard from "./collect/picCard.vue";
import { ref, onMounted, onUpdated } from "vue";

const props = defineProps({
  hidden: { type: Boolean, required: true },
});

const onWheel = (e: WheelEvent) => {
  console.log(e.deltaY);
};

const onRefresh = () => {
  console.log("刷新");
};

onMounted(() => {});

onUpdated(() => {});
</script>

<template>
  <div :hidden="props.hidden">
    <div class="aminion-collect-container" @wheel="onWheel" ref="collectRef">
      <textCard
        id="2"
        content="6、不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更加接近幸福。
——《千与千寻》"
        date="2022-12-30"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
      ></textCard>
    </div>

    <button class="aminion-collect-refresh-btn" @click="onRefresh">刷新</button>
  </div>
</template>

<style scoped>
.aminion-collect-container {
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

.aminion-collect-container::-webkit-scrollbar {
  width: 2px;
}

.aminion-collect-container::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.aminion-collect-container .aminion-collect-pull-refresh {
  height: 50px;
  margin: 0;
  background-color: aqua;
  /* overflow: hidden; */
  font-size: 0.6rem;
}


</style>
