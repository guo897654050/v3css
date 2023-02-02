<script setup lang="ts">
import { onMounted , ref} from 'vue';

const parent = ref<HTMLElement>();

function init() {
  const itemWidth = 310;
  const $width = parent.value!.clientWidth;
  const columns = parseInt(($width / itemWidth).toString());
  const minHeightArr = new Array(columns).fill(0);
  const elements = Array.from(document.querySelectorAll('.water')) as HTMLElement[];
  
  elements.forEach((element) => {
    // 加上margin
    const height = element.clientHeight + 10;
    let temp = getMinHeight(minHeightArr);
    element.setAttribute('style', `left: ${temp.idx * itemWidth}px; top: ${temp.min}px`)
    minHeightArr[temp.idx] += height;
  })
}

function getMinHeight(minHeightArr: {idx: number, height: number}[]) {
  let idx = 0;
  let min = minHeightArr[0];
  for (let i = 0; i<minHeightArr.length; i++) {
    if (minHeightArr[i] < min) {
      min = minHeightArr[i];
      idx = i;
    }
  }
  return {
    idx,
    min
  }
}

function throttle(fn: () => void ,ms: number) {
  let timer: any = null;
  return function(...args: any) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, ms)
    }
  }
}

function resize() {
  window.addEventListener("resize", () => init())
}

onMounted(() => {
  init();
  window.addEventListener("resize", throttle(init, 300))
})

</script>

<template>
  <div class="water-wrapper" ref="parent">
    <div class="water yellow"></div>
    <div class="water blue"></div>
    <div class="water grey"></div>
    <div class="water yellow"></div>
    <div class="water green"></div>
    <div class="water red"></div>
    <div class="water blue"></div>
    <div class="water yellow"></div>
    <div class="water red"></div>
    <div class="water yellow"></div>
    <div class="water red"></div>
    <div class="water green"></div>
    <div class="water blue"></div>
    <div class="water grey"></div>
    <div class="water blue"></div>
    <div class="water yellow"></div>
    <div class="water blue"></div>
    <div class="water green"></div>
    <div class="water red"></div>
    <div class="water green"></div>
  </div>
</template> 
<style lang="less">

.water-wrapper {
  height:100%;
}

.water{
  width: 300px;
  margin: 5px;
  position: absolute;
  transition: all 1s;
}
.blue{
  background-color: blue;
  height: 300px;
}
.green{
  background-color: green;
  height: 400px;
}
.grey{
  background-color: grey;
  height: 700px;
}
.red{
  background-color: red;
  height: 450px;
}
.yellow{
  background-color: yellow;
  height: 250px;
}
</style>