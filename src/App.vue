<script setup lang="ts">
import { storeToRefs } from "pinia";
import home from "./pages/home.vue";
import login from "./pages/login.vue";
import profile from "./pages/profile.vue";
import { homeRouteStore } from "./store/homeRouteTag";

const store = homeRouteStore();

const { homeRouteTag } = storeToRefs(store);

</script>

<template>
  <div class="aminion-container">
    <h2 class="app-title">Aminion</h2>
    <home v-if="homeRouteTag == 'home'" />
    <login v-if="homeRouteTag == 'login'" />
    <profile v-if="homeRouteTag == 'profile'" />
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
  min-width: 250px;
  max-width: auto;
  min-height: 350px;
  max-height: fit-content;
  background-color: #eae6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}
</style>
