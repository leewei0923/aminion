<script setup lang="ts">
import Collect from "./Collect.vue";
</script>

<template>
  <div class="aminion-sidebar-container">
    <!-- 点击登录 -->
    <button class="aminion-login-btn">登录</button>

    <section class="aminion-sidebar-boxs">
      <Collect />

      <Collect />

      <Collect />

      <Collect />
    </section>
  </div>
</template>

<style scoped>
.aminion-sidebar-container {
  width: 50px;
  height: 80vh;
  position: fixed;
  right: 50px;
  top: 50%;
  transform: translate(0, -50%);
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
</style>
