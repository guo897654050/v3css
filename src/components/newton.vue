<template>
  <div class="container">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template> 

<style lang="less" scoped>
.container {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;


  .loader {
    position: absolute;
    display: flex;
    font-size: 11px;
    justify-content: space-between;
    width: 12em;
    border-color: black;
    border-style: solid;
    padding: 0 4em 2em 4em;
    border-width: 0.4em 0.1em 4em 0.1em;

    span {
      position: relative;
      background-color: black;
      width: 0.2em;
      height: 10em;
      transform-origin: top;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 3em;
        height: 3em;
        background-color: black;
        border-radius: 50%;
        left: -1.5em;
      }
    }

    span {

      &:first-child {
        animation: moving-up 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) infinite alternate;
        --direction: 1;
      }

      &:last-child {
        animation: moving-up 0.75s cubic-bezier(0.215, 0.61, 0.355, 1) infinite alternate-reverse;
        --direction: -1;
      }

    }

    @keyframes moving-up {
      0% {
        transform: rotate(0deg);
      }

      50% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(calc(45deg * var(--direction)));
      }
    }
  }
}
</style>