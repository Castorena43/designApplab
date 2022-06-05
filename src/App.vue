<template>
  <div class="d-flex flex-row main">
    <SideBar />
    <div class="d-flex flex-column content">
      <NavBar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    SideBar,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
