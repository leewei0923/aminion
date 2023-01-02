<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  hidden: { type: Boolean, required: true },
});
console.log(props.hidden);

const taskContentRef = ref("");

const onAddTask = () => {
  console.log("内容为", taskContentRef.value);
};
</script>

<template>
  <div :hidden="props.hidden">
    <div class="aminion-editorTask-container">
      <div class="aminion-editorTask-other-circle"></div>
      <input
        type="text"
        placeholder="添加任务"
        class="aminion-editorTask-input"
        v-model="taskContentRef"
        @keyup.enter="onAddTask"
      />
    </div>
  </div>
</template>

<style scoped>
.aminion-editorTask-container {
  width: 300px;
  height: 40px;
  background-color: var(--normal_background);
  position: absolute;
  bottom: 100px;
  right: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border_radius_small);
  column-gap: 5px;
}

.aminion-editorTask-other-circle {
  width: 1rem;
  height: 15px;
  border: 2px solid black;
  border-radius: 50%;
}

.aminion-editorTask-input {
  width: 80%;
  border: none;
  outline: none;
  height: 25px;
  background-color: transparent;
}
</style>
