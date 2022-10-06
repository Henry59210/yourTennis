<template>
  <div class="main-content-container">
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.main-content-container {
  position: absolute;
  top: 60px;
  bottom: 0px;
  width: 100%;
}
</style>
