<!--
 * Author: leewei
 * Date: 2023-12-04
 * Description: home page
-->

<script setup lang="ts">
import qrcode from "../components/qrcode.vue";
</script>

<template>
  <div class="home-container">
    <div class="qr-text-box">
      <!--  qrcode   -->
      <qrcode value="dd" :size="230" class="qrcode" />

      <!--  qrcode text  -->
      <p class="qr-text">https://www.icenew.top</p>
    </div>

    <!--  toggle button  -->
    <div class="options-container">
      <button class="copy-btn">复制</button>
      <button class="login-btn">登录</button>
    </div>
  </div>
</template>

<style scoped>
.qrcode {
  border-radius: 10px 10px 0 0;
}

.qr-text-box {
  background-color: rgba(255, 250, 250);
  border-radius: 10px;
}
.qr-text {
  padding: 5px 5px 10px 5px;
  font-size: 10px;
  margin: 0 0 5px 0;
  border-top: 1px dashed black;
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
.login-btn {
  border: 1px solid #1e90ff;
  color: #1e90ff;
}

.login-btn:active {
  background-color: #1e90ff;
  color: white;
  transition: 0.3s;
}
</style>
