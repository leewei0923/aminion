<script lang="ts" setup>
export interface PropsType {
  loginFlag: boolean;
  onChangeItem: (label: string) => void;
}

const props = withDefaults(defineProps<PropsType>(), {
  loginFlag: false,
});
</script>
<template>
  <div class="aminion-login-bar-container">
    <div
      class="aminion-login-bar-avatar"
      @click="onChangeItem('login-menu')"
      v-if="props.loginFlag"
    >
      <img
        class="aminion-login-bar-iavatar-img"
        src="../assets/images/avatar.jpg"
      />
    </div>

    <button class="aminion-login-btn" @click="onChangeItem('loginIn')" v-else>
      登录
    </button>
  </div>
</template>
<style scoped>
.aminion-login-btn,
.aminion-login-bar-avatar {
  width: 40px;
  height: 40px;
  margin: 40px 5px;
  background-color: rgba(224, 224, 224, 0.73);
  outline: none;
  border: none;
  border-radius: 10px;
  color: rgba(0, 162, 253, 1);
  cursor: pointer;
  overflow: hidden;
}

.aminion-login-bar-iavatar-img {
  width: 40px;
  height: 40px;
}
</style>
