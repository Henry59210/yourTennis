<template>
  <div class="question-content">
    <el-result icon="success" title="Success!" subTitle="Please wait for our email"> </el-result>
  </div>
</template>

<script>
export default {
  name: 'result-page'
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
</style>
