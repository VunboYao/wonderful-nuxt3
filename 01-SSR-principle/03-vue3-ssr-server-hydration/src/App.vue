<template>
  <div class="app">
    <h2>Vue3 App</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(100)
const addCounter = () => {
  count.value++
}
</script>
