<template>
  <div class="app" style="border: 1px solid green; margin: 10px">
    <h2>Home</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">-1</button>
  </div>
</template>

<script setup>
import {useHomeStore} from "../store/home";
import {storeToRefs} from "pinia";

const home = useHomeStore()
const {count} = storeToRefs(home)
function addCounter() {
  home.decrement()
}
</script>
