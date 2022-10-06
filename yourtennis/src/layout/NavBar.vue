<template>
  <div class="nav-container">
    <router-link to="/"><div class="logo-link"><img src="../assets/yourtennis.jpeg" style="height: 60px"></div></router-link>
    <div class="options-container">
      <router-link class="options" tag="div" v-for="item in route" :key="item.path" :to="item.path" active-class="active">
        <span class="options-name">{{item.name}}</span>
      </router-link>
    </div>
    <div class="null-area"></div>
    <div class="account-info-container">
      <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-user-solid"></i>
            <span>{{username}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Log out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    route () {
      const result = []
      this.$router.options.routes.forEach(item => { if (item.name) result.push(item) })
      return result
    }
  },
  data () {
    return {
      username: 'admin',
      active: -1
    }
  },
  methods: {
    handleCommand () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  background: black;
  color: white;
}
.logo-link {
  flex: 1;
  cursor: pointer;
}
.options-name {
  cursor: pointer;
}
.active{
  background: #3d3b3b;
  text-decoration:underline;
}
.options-container {
  list-style-type: none;
  flex: 3;
  display: flex;
}
.options {
  text-align: center;
  flex: 1
}
.null-area {
  flex:3;
}
.account-container {
  cursor: pointer;
  list-style-type: none;
  flex: 1;
  display: flex;
}
.el-dropdown-link {
  cursor: pointer;
  line-height: 60px;
  font-size: 16px;
  color: white;
}
</style>
