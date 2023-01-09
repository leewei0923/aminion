<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import LoginIn from "./components/LoginIn.vue";
import CollectPage from "./components/collectPage.vue";
import { siderTagStore } from "./store/sideBarTag";
import { storeToRefs } from "pinia";
import editor from "./components/editor/editor.vue";
import EditorTask from "./components/EditorTask.vue";
import NotePage from "./components/NotePage.vue";
import Loading from "./components/common-components/loading/loading.vue";
import NoticePage from "./components/NoticePage.vue";
import LoginedPage from "./components/loginedPage.vue";

const store = siderTagStore();

const { siderTag, getSiderTag } = storeToRefs(store);
</script>

<template>
  <div class="aminion-container">
    <SideBar />
    <LoginIn qrcode="登录账号" :hidden="siderTag != 'loginIn'" />
    <CollectPage :hidden="siderTag != 'collect'" />

    <editor :hidden="siderTag != 'edit-note'" />
    <EditorTask :hidden="siderTag != 'edit-task'" />
    <NotePage :hidden="siderTag != 'note'" />
    <NoticePage :hidden="siderTag != 'notice'" />
    <LoginedPage :hidden="siderTag != 'login-menu'" />

    <!-- <Loading type="line" fill="purple" :size="20"  /> -->
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
  z-index: 9999;
}
</style>
