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
        <div class="data-display left-data-display-1" :class="{afterClick: active===1, beforeClick: active!==1}" @click="clickItem(1,'T')">
          <div>T</div>
        </div>
        <div class="data-display left-data-display-2" :class="{afterClick: active===2, beforeClick: active!==2}" @click="clickItem(2,'Body')">
          <div>Body</div>
        </div>
        <div class="data-display left-data-display-3" :class="{afterClick: active===3, beforeClick: active!==3}" @click="clickItem(3,'Wide')">
          <div>Wide</div>
        </div>
      </div>
      <div v-if="serverPlace==='Ad'" class="data-container right-data-container">
        <div class="data-display right-data-display-1" :class="{afterClick: active===4, beforeClick: active!==4}" @click="clickItem(4,'T')">
          <div>T</div>
        </div>
        <div class="data-display right-data-display-2" :class="{afterClick: active===5, beforeClick: active!==5}" @click="clickItem(5,'Body')">
          <div>Body</div>
        </div>
        <div class="data-display right-data-display-3" :class="{afterClick: active===6, beforeClick: active!==6}" @click="clickItem(6,'Wide')">
          <div>Wide</div>
        </div>
      </div>
      <div class="return-placement">
        <div class="return-placement-left">
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
        </div>
        <div class="return-placement-right">
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
          <div style="padding: 20px; border: 2px solid white">
            <el-progress type="circle" :percentage="25" :width="58"></el-progress>
            <el-popover
              placement="bottom"
              title="Return-link"
              width="200"
              trigger="click"
              content="links:">
              <el-button slot="reference" size="small">Returns Made:20</el-button>
            </el-popover>
          </div>
        </div>
      </div>
      <div v-if="resultShow" class="return-result-display">
        <div style="text-align: center;">
          <h3>{{resultTitle+' section Summary'}} <i class="el-icon-close" style="cursor: pointer" @click="resultShow=false"></i></h3>
        </div>
        <el-divider></el-divider>
        <div style="padding: 10px">
          Return Points Won From Returns Made
          <el-progress type="circle" :percentage="25"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'return',
  data () {
    return {
      serverPlace: 'Ad',
      years: [2022, 2021, 2020, 2019, 2018, 2017, 2016],
      year: '',
      serves: '1st',
      active: -1,
      resultTitle: '',
      resultShow: false,
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
    clickItem (num, title) {
      this.active = num
      this.resultTitle = title
      this.resultShow = true
    },
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
.afterClick {
  background: grey;
}
.beforeClick {
  background: cadetblue;
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
  height: 12.5%;
  width: 31%;
  top:21.5%;
  opacity: 0.8;
}
.left-data-container {
  left:19%;
}
.right-data-container {
  left: 51%;
}
.data-display {
  cursor: pointer;
  position: absolute;
  text-align: center;
  width: 34%;
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
.return-result-display {
  position: absolute;
  width: 50%;
  height: 50%;
  bottom: 10%;
  left:50%;
  transform: translateX(-50%);
  border-radius: 10%;
  background: grey;
}
.return-placement {
  background: #3d3b3b;
  opacity: 0.8;
  position: absolute;
  height: 56%;
  width: 65%;
  left: 18%;
  bottom: 4%;
}
.return-placement-left{
  display: inline-block;
  width: 50%;

}
.return-placement-right {
  display: inline-block;
  width: 50%;
  height: 100%;
}
.return-placement-left::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 30%;
  left: -8%;
  bottom: 0;
  background: #3d3b3b;
  transform: skew(-12deg);
  z-index: -999;
}
.return-placement-right::before{
  content: '';
  position: absolute;
  height: 100%;
  width: 30%;
  right: -8%;
  bottom: 0;
  background: #3d3b3b;
  transform: skew(11deg);
  z-index: -999;
}
</style>
