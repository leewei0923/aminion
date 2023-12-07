<!--
 * Author: leewei
 * Date: 2023-12-04
 * Description: 
-->

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";
import { Redo } from "@icon-park/vue-next";
import {
  reactive,
  computed,
  onMounted,
  onUnmounted,
  ref,
  onBeforeMount,
} from "vue";
import { useCountdown } from "src/hooks/useCountdown";
import { homeRouteStore } from "src/store/homeRouteTag";

const store = homeRouteStore();

const { changeHomeRouteTag } = store;

export interface propsType {
  onClose?: () => void;
}

const props = withDefaults(defineProps<propsType>(), {});

const { counter, start } = useCountdown();

// 关闭事件
const onClose = () => {
  changeHomeRouteTag("home");
};

// 挂载前请求获取key值
const qrdata = ref("");
const requestData = ref("");
const timer = ref<NodeJS.Timeout | null>(null);

const scanFlag = ref(false);

onBeforeMount(() => {});

// 倒计时结束刷新按钮
const onRefresh = () => {
  start(30);
  // onFetchData(requestData.value);
};

onMounted(() => {
  start(30);
});

onUnmounted(() => {
  if (timer.value !== null) {
    clearTimeout(timer.value);
  }
});
</script>

<template>
  <div class="aminion-login-container">
    <div class="aminion-login-qrcode">
      <qrcode-vue
        :value="qrdata"
        :size="170"
        :margin="2"
        class="aminion_qrcode_vue"
      ></qrcode-vue>

      <div
        class="aminion-login-mask-container"
        @click="onRefresh"
        v-show="counter === 0"
      >
        <redo
          theme="outline"
          class="aminion-login-mask-redo"
          :spin="true"
        />刷新
      </div>

      <!--<div class="aminion-login-mask-container" v-show="counter === 0">
        已经扫码，请登录。
      </div>-->
    </div>

    <p class="aminion-login-countdown" v-show="counter !== 0 && !scanFlag">
      {{ counter }}秒后结束，请手动刷新
    </p>

    <p class="aminion-login-countdown" v-show="scanFlag">
      已经扫描，请点击登录
    </p>
    <button class="aminion-login-cancel-btn" @click="onClose">取消</button>
  </div>
</template>

<style scoped>
.aminion-login-container {
  width: 250px;
  height: 270px;
  background-color: var(--normal_background);
  border-radius: var(--border_radius_midle);
}

.aminion-login-qrcode {
  width: 170px;
  height: 170px;
  background-color: #ffffff;
  border-radius: var(--border_radius_large);
  margin: 20px auto;
  position: relative;
}

.aminion-login-cancel-btn {
  width: 100px;
  height: 30px;
  border-radius: 50px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: var(--deep_blue_800);
  margin-left: 75px;
  cursor: pointer;
}

.aminion-login-countdown {
  text-align: center;
  font-size: 10px;
  transform: translate(0, -10px);
  color: rgba(50, 50, 50, 0.7);
}

.aminion-login-cancel-btn:active {
  background-color: var(--deep_blue_500);
}

.aminion_qrcode_vue {
  border-radius: var(--border_radius_midle);
}

.aminion-login-mask-container {
  position: absolute;
  top: 0;
  background-color: var(--white_700);
  width: 100%;
  height: 100%;
  left: 0;
  font-size: 15px;
  line-height: 170px;
  text-align: center;
  color: rgba(20, 20, 20, 0.9);
  backdrop-filter: blur(5px);
  cursor: pointer;
}

.aminion-login-mask-redo {
  font-size: 14px;
  margin: 2px 0;
  padding: 5px 5px;
}
</style>
