<template>
  <div class="wrapper">
    <div class="title">title</div>
    <div class="content">
      <div v-for="item,index in data" :key="index" class="item">
        测试内容 + {{ index }}
      </div>  
    </div>
  </div>
</template>

<script setup>
  const data = new Array(100).fill(false)
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  overflow: hidden;
  background:#fff;
  display: flex;
  flex-direction: column;

  .title {
    height: 100px;
    background: skyblue;
  }


  .content {
    flex: 1;
    overflow: scroll;
    .item {
      height: 200px;
      margin-bottom: 20px;
      background: orange;
    }
  }
}

</style>