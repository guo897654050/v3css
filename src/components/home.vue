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
      </ul>
    </div>
  </div>

</template>

<script setup>

</script>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>