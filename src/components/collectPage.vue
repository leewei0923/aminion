<script setup lang="ts">
import textCard from "./collect/textCard.vue";
import linkCard from "./collect/linkCard.vue";
import picCard from "./collect/picCard.vue";

const props = defineProps({
  hidden: { type: Boolean, required: true },
});



const onWheel = (e: WheelEvent) => {
  console.log(
    `deltaY: ${e.deltaY}, deltaMode: ${e.deltaMode}, offsetX:${e.offsetX} , offsetY: ${e.offsetY}`
  );

  console.log(e);
};
</script>

<template>
  <div :hidden="props.hidden">
    <div class="aminion-collect-container" @wheel="onWheel">
      <p class="aminion-collect-pull-refresh">刷新</p>
      <textCard
        id="2"
        content="6、不管前方的路有多苦，只要走的方向正确，不管多么崎岖不平，都比站在原地更加接近幸福。
——《千与千寻》"
        date="2022-12-30"
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
      ></textCard>
    </div>
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
  behavior: smooth;
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
