<template>
  <div class="container">
    <div class="court">
      <div class="left-paddle"></div>
      <div class="ball"></div>
      <div class="right-paddle"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(dimgray, black);
  box-sizing: border-box;

  .court {
    width: 16em;
    height: 16em;
    color: white;
    border: 1em solid currentColor;
    font-size: 16px;
    position: relative;

    .left-paddle,
    .right-paddle {
      width: 1em;
      height: calc(50% - 1em);
      background: #fff;
      position: absolute;
      animation: 1s linear infinite alternate;
    }

    .left-paddle {
      top: 1em;
      left: 1em;
      animation-name: left-moving;
    }

    .right-paddle {
      bottom: 1em;
      right: 1em;
      animation-name: right-moving;
    }

    .ball {
      width: 0;
      height: 0;
      border: 0.5em solid #fff;
      position: absolute;
      top: calc(50% - 0.25em);
      left: 2em;
      animation: ball-moving 1s linear infinite alternate;
    }

    @keyframes ball-moving {
      to {
        transform: translateX(11em);
      }
    }


    @keyframes left-moving {
      to {
        transform: translateY(100%);
      }
    }

    @keyframes right-moving {
      to {
        transform: translateY(-100%)
      }
    }



  }
}
</style>