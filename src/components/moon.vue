<template>
  <div class="sky">
    <div class="sun"></div>
    <div class="moon"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
* {
  animation: 10s linear infinite;
}

.sky {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: skyblue;
  align-items: center;
  justify-content: center;
  position: relative;
  animation-name: animate-sky;
  overflow: hidden;

  .sun,
  .moon {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .sun {
    background-color: gold;
    animation-name: animate-sun;
  }

  .moon {
    background-color: slategray;
    animation-name: animate-moon;
  }

  @keyframes animate-sky {
    50% {
      background-color: black;
    }
  }

  @keyframes animate-sun {
    50% {
      box-shadow: 0 0 5em 1em white;
    }
  }

  @keyframes animate-moon {
    from {
      transform: translateX(-100vmin);
    }

    50% {
      background-color: black;
    }

    to {
      transform: translateX(100vmin);
    }
  }
}
</style>