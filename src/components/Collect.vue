<script setup lang="ts">
import { FolderFocus } from "@icon-park/vue-next";
</script>

<template>
  <div class="aminion-collect-container">
    <div class="aminion-collect-btn">
      <folder-focus theme="outline" size="24" />
    </div>
  </div>
</template>

<style scoped>
.aminion-collect-btn {
  width: 40px;
  height: 40px;
  background-color: var(--btn_selected);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--sider_bar_btn);
}
</style>
