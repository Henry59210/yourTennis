<template>
  <div class="introduction-content">
    <div class="text-field">
      <h1 style="text-align: center; font-size: 45px">Introduction</h1>
      <p>This is the most powerful platform to analyze your competition</p>
    </div>
    <div class="button-field">
      <el-button type="success" id="start-button" @click="startQuizz">Let's Start</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introductionPage',
  methods: {
    startQuizz () {
      this.$router.replace('/start/homepage/setName')
    }
  }
}
</script>

<style scoped>
.introduction-content {
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 5%;
}
.button-field {
  opacity: 1;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 20%;
}
#start-button {
  margin: 0 auto;
  display:block;
  margin:0 auto;
}
</style>
