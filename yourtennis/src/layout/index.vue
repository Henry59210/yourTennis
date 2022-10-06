<template>
  <div>
    <NavBar></NavBar>
    <AppMain></AppMain>
  </div>
</template>

<script>
import NavBar from '@/layout/NavBar'
import AppMain from '@/layout/AppMain'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: { NavBar, AppMain }
}
</script>

<style scoped>

</style>
