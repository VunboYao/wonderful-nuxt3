import {defineStore} from "pinia";
import {ref} from "vue";

export const useHomeStore = defineStore('home', () => {
  const count = ref(1000)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }

  return {
    count,
    increment,
    decrement
  }
})
