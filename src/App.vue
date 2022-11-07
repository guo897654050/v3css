<script setup lang="ts">
import SvgIcon from './components/svgIcon.vue'
import ids from 'virtual:svg-icons-names'

// const modules = import.meta.globEager('/src/assets/icons/*.svg')
const svgNames = ids.map((url: string) => {
  const lastName = url.split('-')[1];
  return lastName
})

const svgAttrs = {
  width: '50px',
  height: '50px'
}


</script>

<template>
  <router-view></router-view>
  <div class="footer">
    <SvgIcon 
      v-for="item in svgNames" 
      :name="item" 
      :key="item"
      v-bind="svgAttrs"
    />
  </div>
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
