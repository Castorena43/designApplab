<template>
  <div class="d-flex flex-row main">
    <SideBar :close="showAside" />
    <div class="d-flex flex-column content">
      <NavBar @close="close" />
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
  },
  data () {
    return {
      showAside: true
    }
  },
  methods: {
    close (value) {
      this.showAside = value
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
