<template>
  <mainPage />
</template>

<script>
  import mainPage from "@/components/pages/main-page/main-page.vue";
  export default {
    name: 'App',
    components: {
      mainPage,
    }
  }
</script>

<style>
  @font-face {
    font-family: Avenir Next Cyr;
    src: url('@/fonts/Avenir Next Cyr Medium/Avenir Next Cyr Medium.ttf');
  }
  @font-face {
    font-family: Gotham Pro;
    src: url('@/fonts/Gotham Pro/gothampro_black.ttf');
  }

  html {
    height: 100%;
  }

  #app {
    font-family: 'Avenir Next Cyr';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    
    /* margin-top: 60px; */
  }
</style>