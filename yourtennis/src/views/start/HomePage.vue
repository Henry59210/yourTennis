<template>
  <div class="questions-background">
    <div class="questions-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.questions-background {
  width: 100%;
  height: 100%;
  background: url("@/assets/questionBackground.jpg") no-repeat fixed;
  background-size: cover;
}
.questions-container {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  margin: auto;
  height: 85%;
  width: 60%;
  background: #a2a2a2;
  border-radius: 10%;
  opacity:0.9;
}
</style>
