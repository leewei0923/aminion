<!--
 * Author: leewei
 * Date: 2023-12-04 18:41
 * Description: Used to generate QR codes
-->

<script setup lang="ts">
import QrcodeVue from "qrcode.vue";

export interface PropsType {
  value: string;
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  value: "",
  size: 170,
});
</script>

<template>
  <qrcode-vue :class="props.class" :value="props.value" :size="props.size" :margin="2"></qrcode-vue>
</template>

<style scoped>
.aminion_qrcode_vue {
  background-color: black;
}
</style>
