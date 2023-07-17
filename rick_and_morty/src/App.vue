<template>
  <div class="App">
    <headerComp />
    <router-view></router-view>
    <footerComp />
  </div>
</template>

<script>
import headerComp from "@/components/subComponents/header/header"
import footerComp from "@/components/subComponents/footer/footer"
export default {
  name: 'App',
  components: {
    headerComp,
    footerComp,
  }
}
</script>

<style>
body{
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
