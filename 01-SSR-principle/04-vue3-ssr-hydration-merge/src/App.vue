<template>
  <div class="app">
    <h2>Vue3 App</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>

    <div>
      <router-link to="/">
        <button>Home</button>
      </router-link>
      <router-link to="/about">
        <button>About</button>
      </router-link>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRoute} from "vue-router";

const count = ref(100)
const addCounter = () => {
  count.value++
}
const route = useRoute()
console.log(route)
</script>
