<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="date"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="your name"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="opponent name"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column label="operation">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleDelete(scope.$index, scope.row)">viewResult</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'history',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: 'aaa'
      }, {
        date: '2016-05-04',
        name: 'bbb'
      }, {
        date: '2016-05-01',
        name: 'ccc'
      }, {
        date: '2016-05-03',
        name: 'ddd'
      }]
    }
  },
  methods: {
    handleDelete () {
      this.$router.push('/analysisResult')
    }
  }
}
</script>

<style scoped>

</style>
