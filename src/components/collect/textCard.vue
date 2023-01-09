<script setup lang="ts">
import { CloseOne } from "@icon-park/vue-next";

const props = defineProps({
  id: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
})


</script>

<template>
  <div class="aminion-collect-textCard-container">
    <span class="aminion-collect-textCard-tag">文本</span>

    <section class="aminion-collect-textCard-maincontent">
      {{ props.content }}
    </section>

    <section class="aminion-collect-textCard-options">
      <p class="aminion-collect-textCard-options-date">{{ props.date }}</p>

      <close-one
        theme="outline"
        size="18"
        fill="#8A919F"
        class="aminion-collect-textCard-options-delete"
      />
    </section>
  </div>
</template>

<style scoped>
.aminion-collect-textCard-container {
  width: 100%;
  height: 100px;
  background-color: var(--deep_blue_100);
  border-radius: var(--border_radius_midle);
}

/* 标签 */
.aminion-collect-textCard-tag {
  background-color: var(--deep_blue);
  color: #ffffff;
  font-size: 10px;
  display: inline-block;
  height: 15px;
  margin: 7px 0 5px 0;
  padding: 1px 10px 1px 5px;
}

.aminion-collect-textCard-maincontent {
  width: 98%;
  margin-left: 1%;
  font-size: 10px;
  font-weight: 500;
  height: 43px;
  overflow: hidden;
  line-height: 43px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.aminion-collect-textCard-options-date {
  font-size: 10px;
  font-weight: 600;
}

.aminion-collect-textCard-options {
  width: 98%;
  margin-left: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aminion-collect-textCard-options-delete {
  cursor: pointer;
}
</style>
