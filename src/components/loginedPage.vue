<script lang="ts" setup>
export interface PropsType {
  hidden: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  hidden: true,
});
</script>
<template>
  <div :hidden="props.hidden">
    <div class="aminion-logined-page-container">
      <div class="aminion-login-page-menu-box">切换账号</div>

      <div class="aminion-login-page-menu-box aminion-danger">退出账号</div>
    </div>
  </div>
</template>
<style scoped>
.aminion-logined-page-container {
  width: 250px;
  height: 100px;
  background-color: var(--normal_background);
  transform: translate(-20px, 40px);
  border-radius: var(--border_radius_midle);
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  scroll-behavior: smooth;
  position: relative;
}

.aminion-logined-page-container::after {
  content: "";
  display: block;
  border: 10px solid;
  border-color: transparent transparent transparent var(--normal_background);
  position: absolute;
  right: -20px;
  top: 10px;
  width: 0;
  height: 0;
}

.aminion-login-page-menu-box {
  width: 100%;
  height: 40px;
  text-align: start;
  line-height: 40px;
  letter-spacing: 2px;
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
}

.aminion-login-page-menu-box:hover {
  background-color: var(--white_800);
}

.aminion-danger {
  color: var(--red_800);
}
</style>
