<script setup lang="ts">
import { FolderFocus, Notes, Remind, Schedule } from "@icon-park/vue-next";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import AddMore from "./AddMore.vue";
import { siderTagStore } from "../store/sideBarTag";

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
  <div class="aminion-sidebar-container">
    <!-- 点击登录 -->
    <button class="aminion-login-btn" @click="onChangeItem('loginIn')">
      登录
    </button>

    <section class="aminion-sidebar-boxs">
      <div
        class="aminion-sidebar-btn-box"
        @click="onChangeItem('collect')"
        :class="{
          'aminion-sidebar-btn-box-selected':
            itemOpenFlag === 'collect' ? true : false,
        }"
      >
        <FolderFocus theme="outline" size="24" />
      </div>

      <div
        class="aminion-sidebar-btn-box"
        @click="onChangeItem('note')"
        :class="{
          'aminion-sidebar-btn-box-selected':
            itemOpenFlag === 'note' ? true : false,
        }"
      >
        <notes theme="outline" size="24" />
      </div>

      <div
        class="aminion-sidebar-btn-box"
        @click="onChangeItem('remind')"
        :class="{
          'aminion-sidebar-btn-box-selected':
            itemOpenFlag === 'remind' ? true : false,
        }"
      >
        <remind theme="outline" size="24" />
      </div>

      <div
        class="aminion-sidebar-btn-box"
        @click="onChangeItem('task')"
        :class="{
          'aminion-sidebar-btn-box-selected':
            itemOpenFlag === 'task' ? true : false,
        }"
      >
        <schedule theme="outline" size="24" />
      </div>

      <AddMore />

    </section>
  </div>
</template>

<style scoped>
.aminion-sidebar-container {
  width: 50px;
  height: 80vh;
  background-color: var(--normal_background);
  border-radius: 15px;
}

.aminion-login-btn {
  width: 40px;
  height: 40px;
  margin: 40px 5px;
  background-color: rgba(224, 224, 224, 0.73);
  outline: none;
  border: none;
  border-radius: 10px;
  color: rgba(0, 162, 253, 1);
  cursor: pointer;
}

.aminion-sidebar-boxs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
}

@media (max-height: 640px) {
  .aminion-sidebar-boxs {
    row-gap: 10px;
  }
}

.aminion-sidebar-btn-box {
  width: 40px;
  height: 40px;
  background-color: var(--btn_normal);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--btn_normal_color);
  cursor: pointer;
}

.aminion-sidebar-btn-box-selected {
  background-color: var(--btn_selected);
  color: var(--sider_bar_btn);
}
</style>
