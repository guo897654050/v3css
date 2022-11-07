<template>
  <div class="demo">
    <div>姓名--state.name：{{state?.name}}</div>
    <!-- <div>姓名2--nameRef：{{nameRef}}</div> -->
    <div>年龄：{{state?.age}}</div>
  </div>
</template>

<script lang="ts">
import { reactive, toRef } from 'vue'
export default {
  name: 'reactivedemo',
  setup () {
    // 响应式对象
    const state = reactive({})

    // 通过toRef创建一个Ref响应式
    // const nameRef = toRef(state, 'name')

    // 过3秒后改变 两者 保持引用关系 
    setTimeout(() => {
      // update1:改变name属性
      Object.assign(state, {
        name: '张三',
        age: 999
      })
    }, 3000)

    // 过6秒后改变 两者 保持引用关系 
    // setTimeout(() => {
    //   // update1:改变name属性
    //   nameRef.value = '我就是冰箱太凉'
    // }, 6000)

    return {
      // nameRef,
      state
    }
  }
}
</script>

