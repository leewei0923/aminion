<!--
 * Author: leewei
 * Date: 2023-12-04
 * Description: home page
-->

<script setup lang="ts">
import { onMounted, ref } from "vue";
import qrcode from "../components/qrcode.vue";
import { homeRouteStore } from "src/store/homeRouteTag";

const taburl = ref<string | undefined>("");

const store = homeRouteStore();

const { changeHomeRouteTag } = store;

function getCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs[0].url);

    taburl.value = tabs[0].url;
  });
}

const copyFlag = ref(false);

/**
 * copy-btn copy the taburl
 */
function onCopy() {
  if (!taburl.value) {
    alert("没有获取到当前的url");
    return;
  }

  navigator.clipboard.writeText(taburl.value).then((result) => {
    copyFlag.value = true;
  });

  setTimeout(() => {
    copyFlag.value = false;
  }, 2000);
}

const loginFlag = ref(true);

onMounted(() => {
  getCurrentTab();
});
</script>

<template>
  <div class="home-container">
    <div class="qr-text-box" v-if="typeof taburl === 'string'">
      <!--  qrcode   -->
      <qrcode :value="taburl" :size="230" class="qrcode" />

      <!--  qrcode text  -->
      <p class="qr-text">{{ taburl }}</p>
    </div>

    <div class="err-box" v-else>没有获取到当前的url</div>

    <!--  toggle button  -->
    <div class="options-container">
      <button
        class="copy-btn"
        :class="copyFlag ? 'copy-susscess' : ''"
        @click="onCopy"
      >
        {{ copyFlag ? "成功" : "复制" }}
      </button>
      <button
        class="login-btn"
        v-if="!loginFlag"
        @click="
          () => {
            changeHomeRouteTag('login');
          }
        "
      >
        登录
      </button>

      <div v-if="loginFlag" class="home-avatar-box" @click="changeHomeRouteTag('profile')">
        <img
          src="https://p6-passport.byteacctimg.com/img/user-avatar/002843adf8bd09f43aa84011b4a93238~150x150.awebp"
          class="home-avatar"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 0 5px;
}
.qrcode {
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-text-box {
  background-color: rgba(255, 250, 250);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.qr-text {
  padding: 5px 5px 10px 5px;
  font-size: 10px;
  margin: 0 0 5px 0;
  border-top: 1px dashed black;
  text-wrap: wrap;
  word-break: break-all;
}

.options-container {
  display: flex;
  justify-content: space-between;
}

.copy-btn,
.login-btn {
  width: 60px;
  height: 30px;
  border: none;
  margin-top: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.copy-btn {
  background-color: #1e90ff;
}

.copy-btn:active {
  background-color: #61aefc;
}

.copy-susscess {
  background-color: #32cd32;
}
.login-btn {
  border: 1px solid #1e90ff;
  color: #1e90ff;
}

.login-btn:active {
  background-color: #1e90ff;
  color: white;
  transition: 0.3s;
}
.home-avatar-box {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  cursor: pointer;
}

.home-avatar-box:hover {
  transform: scale(1.2);
}

.home-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
