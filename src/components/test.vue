<template>
  <div class="container">
    <div class="t"></div>
  </div>
   
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100px;
  overflow: hidden;
   .t {
    position: absolute;
    height: 400px;
    width: 100px;
    background: red;

  }
}
 
</style>