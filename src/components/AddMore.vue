<script setup lang="ts">
import { AddOne, AddTwo, DocAdd } from "@icon-park/vue-next";
</script>

<template>
  <div class="aminion-add-more-container" >
    <section class="aminion-add-more-options" >
      <span class="icon-box" title="添加笔记"
        ><doc-add theme="outline" fill="#333"
      /></span>
      <span class="icon-box" title="添加任务"
        ><add-two theme="outline" fill="#333"
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
  cursor: pointer;
}
</style>
