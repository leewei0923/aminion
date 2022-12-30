<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import LoginIn from "./components/LoginIn.vue";
import CollectPage from "./components/collectPage.vue";
import { siderTagStore } from "./store/sideBarTag";
import { storeToRefs } from "pinia";

const store = siderTagStore();

const { siderTag, getSiderTag } = storeToRefs(store);
</script>

<template>
  <div class="aminion-container">
    <SideBar />
    <LoginIn qrcode="登录账号" :hidden="siderTag != 'loginIn'" />
    <CollectPage :hidden="siderTag != 'collect'" />
  </div>
</template>

<style scoped>
.aminion-container {
  position: fixed;
  right: 50px;
  top: 50%;
  display: flex;
  flex-direction: row-reverse;
  transform: translate(0, -50%);
}
</style>
