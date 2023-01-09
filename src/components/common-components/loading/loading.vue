<script lang="ts" setup>
import { defineProps } from "vue";

export interface Props {
  type: "line" | "circle";
  fill?: string;
  size?: number;
  tip?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "line",
  fill: "#183153",
  size: 20,
});
</script>
<template>
  <!-- 线 -->

  <div class="aminion-loding-line-container" v-if="props.type === 'line'">
    <div
      class="aminion-loader"
      :style="{
        '--bg-color': props.fill,
        width: `${props.size}px`,
        height: `${props.size}px`,
      }"
    >
      <span class="aminion-loader-bar" :style="{
        '--uib-color': props.fill,
        width: `${props.size}px`,
        height: `${props.size}px`,
      }" v-for="x in new Array(3)"></span>
    </div>
    <p
      class="aminion-loding-tip"
      :style="{ 'font-size': `${props.size / 1.5}px`, color: props.fill }"
    >
      加载中
    </p>
  </div>

  <!-- 圆圈 -->

  <div class="aminion-loding-circle-container" v-else>
    <div
      class="aminion-dot-spinner"
      :style="{
        '--uib-color': props.fill,
        width: `${props.size}px`,
        height: `${props.size}px`,
      }"
    >
      <div class="aminion-dot-spinner__dot" v-for="x in new Array(8)"></div>
    </div>
    <p
      class="aminion-loding-tip"
      :style="{ 'font-size': `${props.size / 1.5}px`, color: props.fill }"
    >
      加载中
    </p>
  </div>
</template>
<style>
.aminion-loding-circle-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aminion-dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: 0.9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.aminion-dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.aminion-dot-spinner__dot::before {
  content: "";
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.aminion-dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.aminion-dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.aminion-dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.aminion-dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.aminion-dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.aminion-dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.aminion-dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.aminion-dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.aminion-dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.aminion-dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.aminion-dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.aminion-dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.aminion-dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.aminion-dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 线 */

.aminion-loding-line-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.6rem;
}

.aminion-loader {
  display: flex;
  align-items: center;
}

.aminion-loader-bar {
  display: inline-block;
  width: 3px;
  height: 20px;
  background-color: var(--bg-color);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.aminion-loader-bar:nth-child(2) {
  height: 35px;
  margin: 0 5px;
  animation-delay: 0.25s;
}

.aminion-loader-bar:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes scale-up4 {
  20% {
    background-color: var(--bg-color);
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}

.aminion-loding-tip {
  width: auto;
  color: var(--uib-color);
}
</style>
