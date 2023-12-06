<script setup lang="ts">
import home from "./pages/home.vue";
</script>

<template>
  <div class="aminion-container">
    <h2 class="app-title">Aminion</h2>
    <home />
  </div>
</template>

<style scoped>
.app-title {
  text-align: center;
  color: transparent;
  background: linear-gradient(to bottom, #1E90FF 0%, #75D8FE 100%);
  background-clip: text;
  -webkit-background-clip: text; 
  margin: -5px 0 5px 0;
}
.aminion-container {
  width: 250px;
  height: 350px;
  background-color: #EAE6E6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
