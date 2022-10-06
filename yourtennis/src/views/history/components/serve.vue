<template>
  <div class="result-container">
    <div class="option">
      <div class="court-option">
        <p>Court:</p>
        <el-radio-group v-model="serverPlace" size="small">
          <el-radio-button label="Deuce"></el-radio-button>
          <el-radio-button label="Ad"></el-radio-button>
        </el-radio-group>
        <p>years:</p>
        <el-select v-model="year" placeholder="请选择">
          <el-option
            v-for="(item, index) in years"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <p>Serves:</p>
        <el-radio-group v-model="serves" size="small" :change="changeDataSet()">
          <el-radio-button label="1st"></el-radio-button>
          <el-radio-button label="2nd"></el-radio-button>
        </el-radio-group>
      </div>

    </div>
    <div class="picture">
      <div v-if="serverPlace==='Deuce'" class="data-container left-data-container">
        <div class="data-display left-data-display-1">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set1.serve" :width="58"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set1.point" :width="58" color="red"></el-progress>
        </div>
        <div class="data-display left-data-display-2">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set2.serve" :width="58"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set2.point" :width="58"></el-progress>
        </div>
        <div class="data-display left-data-display-3">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set3.serve" :width="58" color="red"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set3.point" :width="58"></el-progress>
        </div>
      </div>
      <div v-if="serverPlace==='Ad'" class="data-container right-data-container">
        <div class="data-display right-data-display-1">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set1.serve" :width="58"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set1.point" :width="58" color="red"></el-progress>
        </div>
        <div class="data-display right-data-display-2">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set2.serve" :width="58"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set2.point" :width="58"></el-progress>
        </div>
        <div class="data-display right-data-display-3">
          <div>Serves Made</div>
          <el-progress type="circle" :percentage="dataSet.set3.serve" :width="58" color="red"></el-progress>
          <div>Point Won</div>
          <el-progress type="circle" :percentage="dataSet.set3.point" :width="58"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'serve',
  data () {
    return {
      serverPlace: 'Ad',
      years: [2022, 2021, 2020, 2019, 2018, 2017, 2016],
      year: '',
      serves: '1st',
      dataSet: {
        set1: {
          serve: 24,
          point: 64.5
        },
        set2: {
          serve: 25,
          point: 70
        },
        set3: {
          serve: 51,
          point: 50
        }
      }
    }
  },
  methods: {
    changeDataSet () {
      if (this.serves === '2nd') {
        this.dataSet.set1.serve = 15
        this.dataSet.set2.serve = 30
        this.dataSet.set3.serve = 55
      } else {
        this.dataSet.set1.serve = 24
        this.dataSet.set2.serve = 25
        this.dataSet.set3.serve = 51
      }
    }
  }
}
</script>

<style scoped>
.court-option {
  width:100%;
  text-align: center;
}
.result-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 20px;
  margin: 0 15%;
}
.option {
  float: left;
  width:30%;
  height: 95%;
  border: 1px black solid;
  background: #d0d0d5;
}
.picture {
  margin-left: 30%;
  margin-right: 30%;
  position: absolute;
  height: 95%;
  width: 70%;
  background: url("@/assets/tennisCourt.jpg") no-repeat center;
  background-size: 100% 100%;
  font-size: 14px;
}
.data-container {
  position: absolute;
  height: 28%;
  width: 37%;
  top:40%;
  opacity: 0.8;
}
.left-data-container {
  left: 13%;
}
.right-data-container {
  left: 51%;
}
.data-display {
  position: absolute;
  background: cadetblue;
  text-align: center;
  width: 31%;
  height: 100%;
}
.right-data-display-1 {
  left: 0;
}
.right-data-display-1::before {
  content: '';
  position: absolute;
  left: 90%;
  top: 50%;
  width: 20%;
  height: 49.8%;
  background: cadetblue;
  transform: skew(10deg);
  z-index: -100
}
.right-data-display-2 {
  border-left: 1px white dashed;
  left: 31%;
  transform: skew(10deg)
}
.right-data-display-3 {
  border-left: 1px white dashed;
  left: 62%;
  transform: skew(10deg)
}
.left-data-display-1 {
  right: 0;
}
.left-data-display-1::before {
  content: '';
  position: absolute;
  right: 90%;
  top: 50%;
  width: 20%;
  height: 49.8%;
  background: cadetblue;
  transform: skew(-10deg);
  z-index: -100
}
.left-data-display-2 {
  border-right: 1px white dashed;
  right: 31%;
  transform: skew(-10deg)
}
.left-data-display-3 {
  border-right: 1px white dashed;
  right: 62%;
  transform: skew(-10deg)
}
</style>
