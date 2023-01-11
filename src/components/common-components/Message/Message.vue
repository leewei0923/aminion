<script lang="ts" setup name="Amessage">
import { ref, onMounted, PropType, CSSProperties } from "vue";
import { Attention, Check, Info, ReduceOne } from "@icon-park/vue-next";
import { Icon } from "@icon-park/vue-next/lib/runtime";

defineProps({
  type: {
    type: String as PropType<"success" | "error" | "warning" | "info">,
    default: "success",
  },
  message: {
    type: String,
    default: "恭喜你，这是一条消息",
  },
});

const isShow = ref(false);
onMounted(() => {
  isShow.value = true;
});

// 定义一个对象，包含三种情况的样式，对象key就是类型字符串
interface IconType {
  warning: styleItemType;
  error: styleItemType;
  success: styleItemType;
  info: styleItemType;
}

interface styleItemType {
  icon: Icon;
}
const style = {
  warning: {
    color: "#E6A23C",
    backgroundColor: "rgb(253, 246, 236)",
    borderColor: "rgb(250, 236, 216)",
  },
  error: {
    color: "#F56C6C",
    backgroundColor: "rgb(254, 240, 240)",
    borderColor: "rgb(253, 226, 226)",
  },
  success: {
    color: "#67C23A",
    backgroundColor: "rgb(240, 249, 235)",
    borderColor: "rgb(225, 243, 216)",
  },
  info: {
    color: "#909399",
    backgroundColor: "#edf2fc",
    borderColor: "#ebeef5",
  },
};

const icon: IconType = {
  warning: {
    icon: Attention,
  },
  error: {
    icon: ReduceOne,
  },
  success: {
    icon: Check,
  },
  info: {
    icon: Info,
  },
};
</script>

<template>
  <Transition name="down">
    <div class="aminion-message" v-show="isShow" :style="style[type]">
      <component :is="icon[type].icon" class="aminion-icon"></component>
      <span class="aminion-text">{{ message }}</span>
    </div>
  </Transition>
</template>

<style>
.aminion-down-enter-from {
  transform: translate3d(0, -75px, 0);
  opacity: 0;
}
.aminion-down-enter-active {
  transition: all 0.5s;
}
.aminion-down-enter-to {
  transform: none;
  opacity: 1;
}
.aminion-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  /* border: 1px solid #e4e4e4; */
  /* background: #f5f5f5; */
  color: #999;
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.aminion-message .aminion-text {
  line-height: 50px;
}

.aminion-icon {
  line-height: 50px;
  vertical-align: middle;
  font-size: 20px;
  margin-top: 8px;
}
</style>
