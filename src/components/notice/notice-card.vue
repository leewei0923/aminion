<script lang="ts" setup>
import { Close } from "@icon-park/vue-next";
</script>
<template>
  <div class="aminion-notice-card-container">
    <section class="aminion-notic-card-header">
      <span class="aminion-notice-card-origin">来自：我的手机</span>

      <Close class="aminion-notice-card-icon-close" size="12" />
    </section>

    <section class="aminion-notice-card-main-content">
      <p class="aminion-notice-card-main-content-p">
        我们不断定义自己超越不可能的能力。我们盘点这些时刻，那些时刻我们勇于超越更高，打破枷锁，探索星际，让未知成为已知。我们把这些时刻作为最值得骄傲的成就。但是我们失去了一切。或者说我们只是忘记了我们仍然是先行者，这仅仅只是开端。最伟大的成就不可能在我们身后，因为命运在我们之上。
      </p>
    </section>

    <section class="aminion-notice-card-footer">
      <span class="aminion-notice-card-footer-span">2023-01-05 15:21</span>
    </section>
  </div>
</template>
<style scoped>
.aminion-notice-card-container {
  width: 100%;
  min-height: 120px;
  max-height: 125px;
  background-color: var(--deep_blue_100);
  overflow: hidden;
  padding: 5px;
}

.aminion-notic-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.aminion-notice-card-origin {
  font-size: 10px;
}

.aminion-notice-card-icon-close {
  cursor: pointer;
}

.aminion-notice-card-icon-close:hover {
  transform: scale(1.2);
  color: var(--deep_blue_800);
}

.aminion-notice-card-main-content {
  max-height: 60px;
  overflow: hidden;

  margin-top: 4px;
}

.aminion-notice-card-main-content-p {
  font-size: 10px;
  line-height: 15px;
}

.aminion-notice-card-footer {
  margin-top: 5px;
}

.aminion-notice-card-footer-span {
  font-size: 10px;
}
</style>
