<template>
  <div class="question-content">
    <div class="question-field">
      <h1>Please enter your name</h1>
      <el-input v-model="name"></el-input>
      <h1>Please enter your opponent name</h1>
      <el-input v-model="oppoName"></el-input>
    </div>
    <div class="button-field">
      <el-button type="success" id="next-button" @click="nextPhase">Next Phase</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setName',
  data () {
    return {
      name: '',
      oppoName: ''
    }
  },
  methods: {
    nextPhase () {
      this.$router.replace('/start/homepage/haveCompeted')
    }
  }
}
</script>

<style scoped>
.question-content {
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
#next-button {
  margin: 0 auto;
  display:block;
  margin:0 auto;
}
</style>
