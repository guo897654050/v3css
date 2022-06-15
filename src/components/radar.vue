<template>
  <div class="container">
    <div class="radar"></div>
  </div>
</template>

<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, silver, black);

  .radar {
    width: calc(8em + 1.5em);
    height: calc(8em + 1.5em);
    font-size: 28px;
    position: relative;
    background:
      // 一天竖线
      linear-gradient(90deg,
        transparent 49.75%,
        darkgreen 49.75%,
        darkgreen 50.25%,
        transparent 50.25%),
      // 一条横线
      linear-gradient(0deg,
        transparent 49.75%,
        darkgreen 49.75%,
        darkgreen 50.25%,
        transparent 50.25%),
      // 重复圆圈
      repeating-radial-gradient(transparent 0,
        transparent 0.95em,
        darkgreen 0.95em,
        darkgreen 1em),
      // 背景色
      linear-gradient(black, black);
    border-radius: 50%;

    &::before {
      content: '';
      position: absolute;
      width: calc(9.5em / 2);
      height: calc(9.5em / 2);
      background: linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, rgba(0, 192, 0, 1) 100%);
      border-radius: 100% 0 0 0;
      transform-origin: 100% 100%;
      animation: move 5s linear infinite;
    }

    @keyframes move {
      to {
        transform: rotate(360deg);
      }

    }
  }



}
</style>