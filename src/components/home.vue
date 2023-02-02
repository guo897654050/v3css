<template>
  <div class="nav">
    <div>
      <h2>this is css3 practice</h2>
    </div>
    <div>
      <ul>
        <li>
          <router-link to="/thanks">Thanks</router-link>
        </li>
        <li>
          <router-link to="/pingpong">pingpong</router-link>
        </li>
        <li>
          <router-link to="/moon">moon</router-link>
        </li>
        <li>
          <router-link to="/ice">ice-cream</router-link>
        </li>
        <li>
          <router-link to="/newton">newton</router-link>
        </li>
        <li>
          <router-link to="/radar">radar</router-link>
        </li>
        <li>
          <router-link to="/waterfall">waterfall</router-link>
        </li>
        <li>
          <router-link to="/overflow">overflow</router-link>
        </li>
      </ul>
    </div>
    <div class="footer">
    <SvgIcon 
      v-for="item in svgNames" 
      :name="item" 
      :key="item"
      v-bind="svgAttrs"
    />
  </div>
  </div>

</template>


<script setup lang="ts">
import SvgIcon from './svgIcon.vue'
import ids from 'virtual:svg-icons-names'

const svgNames = ids.map((url: string) => {
  const lastName = url.split('-')[1];
  return lastName
})

const svgAttrs = {
  width: '50px',
  height: '50px'
}
</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>