<template>
  <div>
    <el-row class="analysis-result-info">
      <el-col :span="4"><div>{{time}}</div></el-col>
      <el-col :span="4"><div>your name: {{yourName}}</div></el-col>
      <el-col :span="4"><div>opponent name: {{oppoName}}</div></el-col>
    </el-row>
    <div class="analysis-type">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="SERVE" name="serve"></el-tab-pane>
          <el-tab-pane label="RETURN" name="return"></el-tab-pane>
        </el-tabs>
        <hr class="hr-solid">
      <div class="analysis-result-container">
        <router-view class="analysis-result-content"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'analysisResult',
  data () {
    return {
      time: '2022-6-5',
      yourName: 'ZhangSan',
      oppoName: 'LiSi',
      activeName: 'serve'
    }
  },
  methods: {
    handleClick () {
      let path = ''
      this.activeName === 'serve' ? path = '/analysisResult/serve' : path = '/analysisResult/return'
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
.analysis-result-info {
  height: 60px;
  text-align: center;
  padding: 20px;
  background: cadetblue;
}
.analysis-type {
  position: absolute;
  padding: 20px;
  top: 60px;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
}
.hr-solid {
  border: 0;
  border-top: 1px solid #d0d0d5;
}
.analysis-result-container {
  position: absolute;
  top: 95px;
  bottom: 0;
  left: 0;
  right: 0;
  background: url("@/assets/questionBackground.jpg") no-repeat fixed;
  background-size: cover;
}
.analysis-result-content {

}
</style>
