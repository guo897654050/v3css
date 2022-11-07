<template>
  <svg aria-hidden="true" :width="width" :heigth="height">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'



interface Props {
  name: string
  prefix?: string
  color?: string
  width: string
  height: string
}

// 使用withDefault可以赋默认值，同时删除可选标签
const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: '#333',
})

// console.log(999, props)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const color = computed(() => props.color)

const width = computed(() => props.width)
const height = computed(() => props.height)

</script>

<style scoped>

</style>