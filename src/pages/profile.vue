<!--
 * Author: leewei
 * Date: 2023-12-06 15:37
 * Description: profile page
-->

<script setup lang='ts'>

</script>

<template>
  <div class="profile-container">
    
    <!--avatar-->
    <img  src="https://p6-passport.byteacctimg.com/img/user-avatar/002843adf8bd09f43aa84011b4a93238~150x150.awebp" alt="avatar" class="avatar-img" />

    <p class="nickname">最帅的小朋友</p>

    <!--exit button-->
    <button @click="" class="exit-btn">退出</button>
    <button @click="" class="back-btn">返回</button>
  </div>
</template>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.avatar-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
}

.nickname {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

.exit-btn {
    margin-top: 20px;
    padding: 10px 30px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.back-btn {
    margin-top: 10px;
    padding: 10px 30px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>