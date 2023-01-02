<script setup lang="ts">
import { AddOne, AddTwo, DocAdd } from "@icon-park/vue-next";
import { storeToRefs } from "pinia";
import { siderTagStore } from "src/store/sideBarTag";
import { ref } from "vue";

const store = siderTagStore();

const { siderTag } = storeToRefs(store);
const { changeSiderTag } = store;

/**
 * 改变边栏菜单的状态
 */
const itemOpenFlag = siderTag;
const onChangeItem = (label: string) => {
  if (itemOpenFlag.value === label) {
    itemOpenFlag.value = "";
    changeSiderTag("");
  } else {
    itemOpenFlag.value = label;
    changeSiderTag(label);
  }
};
</script>

<template>
  <div class="aminion-add-more-container">
    <section class="aminion-add-more-options">
      <span
        class="icon-box"
        title="添加笔记"
        @click="onChangeItem('edit-note')"
        :class="itemOpenFlag === 'edit-note' ? 'icon-selected ' : ''"
        ><doc-add theme="outline"
      /></span>
      <span
        class="icon-box"
        title="添加任务"
        :class="itemOpenFlag === 'edit-task' ? 'icon-selected ' : ''"
        @click="onChangeItem('edit-task')"
        ><add-two theme="outline"
      /></span>
    </section>

    <add-one theme="outline" size="24" fill="#333" />
  </div>
</template>

<style scoped>
.aminion-add-more-container {
  position: absolute;
  bottom: 20px;
  cursor: pointer;
}

.aminion-add-more-options {
  position: absolute;
  top: -80px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.aminion-add-more-options .icon-box {
  background-color: var(--deep_blue_100);
  display: block;
  height: 30px;
  width: 30px;
  text-align: center;
  padding: 7px 0;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  color: #333;
}

.aminion-add-more-options .icon-selected {
  background-color: var(--deep_blue_800);
  color: #fff;
}
</style>
