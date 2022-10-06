<template>
  <div class="question-content">
    <div class="question-field">
      <h1>Which hand of you</h1>
      <div class="options">
        <el-radio v-model="yourHand" label="Right">Right</el-radio>
        <el-radio v-model="yourHand" label="Left">Left</el-radio>
      </div>
      <h1>Which hand of your opponent name</h1>
      <div class="options">
        <el-radio v-model="oppoHand" label="Right">Right</el-radio>
        <el-radio v-model="oppoHand" label="Left">Left</el-radio>
      </div>
    </div>
    <div class="button-field">
      <el-button type="success" id="next-button" @click="nextPhase">Next Phase</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chooseHand',
  data () {
    return {
      yourHand: '',
      oppoHand: ''
    }
  },
  methods: {
    nextPhase () {
      this.$router.replace('/start/homepage/pasteDoubleLinks')
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
