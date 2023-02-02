<script setup lang="ts">
// const modules = import.meta.globEager('/src/assets/icons/*.svg')

</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  .footer {
    display: flex;
    justify-content: center;
  }
}

body {
  margin: 0;
  height: 100vh;
}
</style>
