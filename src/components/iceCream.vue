<template>
  <div class="container">
    <div class="ice-lolly">
      <div class="flavors"></div>
      <div class="stick"></div>
    </div>
  </div>
</template> 
<style lang="less" scoped>
.container {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkslategray;

  .ice-lolly {
    font-size: 7px;

    .flavors {
      width: 19em;
      height: 26em;
      border-radius: 8em 8em 1em 1em;
      position: relative;
      overflow: hidden;
      z-index: 2;


      &::before {
        content: '';
        position: absolute;
        width: 140%;
        height: 120%;
        background: linear-gradient(hotpink 0%,
            hotpink 25%,
            deepskyblue 25%,
            deepskyblue 50%,
            gold 50%,
            gold 75%,
            lightgreen 75%,
            lightgreen 100%);
        left: -20%;
        transform: rotate(-25deg);
        animation: moving 100s linear infinite;
        animation-play-state: paused;
      }

      &::after {
        content: '';
        position: absolute;
        width: 2em;
        height: 17em;
        background-color: rgba(255, 255, 255, 0.5);
        left: 2em;
        bottom: 2em;
        border-radius: 1em;
      }

      @keyframes moving {
        to {
          background-position: 0 1000vh;
        }

      }
    }

    .stick {
      position: relative;
      width: 6em;
      height: 10em;
      background: sandybrown;
      left: calc(50% - 3em);
      border-radius: 0 0 3em 3em;

      &::after {
        content: '';
        position: absolute;

        width: inherit;
        height: 3em;
        background: sienna;
      }
    }

  }
}

.ice-lolly:hover .flavors::before {
  animation-play-state: running;
}
</style>