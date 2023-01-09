<script setup lang="ts">
import { CloseOne } from "@icon-park/vue-next";
</script>

<template>
  <div class="aminion-note-card-container">
    <p class="aminion-note-card-title">202301031910</p>

    <section class="aminion-note-card-main-content">
      雪花写作法便是像科赫雪花曲线的生成过程那样：将已有的想法进行层层切割、扩展、细化，最终将创作者原先的想法生成一本书籍。
      兰迪认为，任何地方的任何方法都无法替代作者产生创意，雪花写作法的功能并不在此。
    </section>

    <section class="aminion-note-card-footer">
      <span class="aminion-note-card-date">2023-01-03</span>
      <span class="aminion-note-card-tag">日记</span>
      <close-one
        theme="outline"
        class="aminion-note-card-close-btn"
        fill="#8A919F"
      />
    </section>
  </div>
</template>

<style scoped>
.aminion-note-card-container {
  width: 100%;
  height: 130px;
  background-color: var(--btn_normal);
}

.aminion-note-card-title {
  padding: 0 5px;
  font-size: 13px;
  font-weight: 800;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}

.aminion-note-card-main-content {
  font-size: 10px;
  padding: 0 5px;
  width: 100%;
  height: 65%;
  line-height: 13px;
}

.aminion-note-card-footer {
  font-size: 13px;
  padding: 5px;
  position: relative;
}

.aminion-note-card-tag {
  color: #fff;
  background-color: var(--deep_blue);
  font-size: 10px;
  padding: 3px 5px;
  border-radius: var(--border_radius_small);
  margin: 0 10px;
}

.aminion-note-card-close-btn {
  position: absolute;
  right: 5px;
  cursor: pointer;
}
</style>
