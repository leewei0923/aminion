<script setup lang="ts">
import { CloseOne } from "@icon-park/vue-next";


const props = defineProps({
  id: { type: String, required: true },
  src: { type: String, required: true },
  date: { type: String, required: true },
});


</script>

<template>
  <div class="aminion-collect-picCard-container">
    <span class="aminion-collect-picCard-tag">图片</span>

    <section class="aminion-collect-picCard-maincontent">
      <img
        :src="props.src"
      />
    </section>

    <section class="aminion-collect-picCard-options">
      <p class="aminion-collect-picCard-options-date">{{ props.date }}</p>

      <close-one
        theme="outline"
        size="18"
        fill="#8A919F"
        class="aminion-collect-picCard-options-delete"
      />
    </section>
  </div>
</template>

<style scoped>
.aminion-collect-picCard-container {
  width: 100%;
  height: 144px;
  background-color: var(--deep_blue_100);
  border-radius: var(--border_radius_midle);
}

/* 标签 */
.aminion-collect-picCard-tag {
  background-color: var(--deep_blue);
  color: #ffffff;
  font-size: 10px;
  display: inline-block;
  height: 15px;
  margin: 7px 0 5px 0;
  padding: 1px 10px 1px 5px;
}

.aminion-collect-picCard-maincontent {
  width: 98%;
  margin-left: 1%;
  font-size: 10px;
  font-weight: 500;
  height: 80px;
  word-wrap: normal;
  overflow: hidden;
  line-height: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.aminion-collect-picCard-maincontent img {
  object-fit: contain;
  height: 100%;
}

.aminion-collect-picCard-options-date {
  font-size: 10px;
  font-weight: 600;
}

.aminion-collect-picCard-options {
  width: 98%;
  margin-left: 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.aminion-collect-picCard-options-delete {
  cursor: pointer;
}
</style>
