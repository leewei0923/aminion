<script setup lang="ts">
import QrcodeVue from "qrcode.vue";

const props = defineProps({
  hidden: { type: Boolean, required: true },
  qrcode: { type: String, required: true },
});

const qrdata = props.qrcode;
</script>

<template>
  <div class="aminion-login-container" :hidden="props.hidden">
    <div class="aminion-login-qrcode">
      <qrcode-vue
        :value="qrdata"
        :size="170"
        :margin="2"
        class="aminion_qrcode_vue"
      ></qrcode-vue>
    </div>

    <button class="aminion-login-cancel-btn">取消</button>
  </div>
</template>

<style scoped>
.aminion-login-container {
  width: 250px;
  height: 270px;
  transform: translate(-20px, 40px);
  background-color: var(--normal_background);
  border-radius: var(--border_radius_midle);
}

.aminion-login-qrcode {
  width: 170px;
  height: 170px;
  background-color: #ffffff;
  border-radius: var(--border_radius_large);
  margin: 20px auto;
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

.aminion-login-cancel-btn:active {
  background-color: var(--deep_blue_500);
}

.aminion_qrcode_vue {
  border-radius: var(--border_radius_midle);
}
</style>
