<script setup lang="ts">
import home from "./pages/home.vue";
import login from "./pages/login.vue";
</script>

<template>
  <div class="aminion-container">
    <h2 class="app-title">Aminion</h2>
    <!--<home />-->
    <login />
  </div>
</template>

<style scoped>
.app-title {
  text-align: center;
  color: transparent;
  background: linear-gradient(to bottom, #1e90ff 0%, #75d8fe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  margin: -5px 0 5px 0;
}
.aminion-container {
  width: 250px;
  height: 350px;
  background-color: #eae6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}
</style>
