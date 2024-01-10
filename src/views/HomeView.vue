<script setup>
 import { ref, watch } from "vue";
 import { useStorage } from "@/composables/useStorage.js";

 let food = useStorage('food')
 /*let food = ref(localStorage.getItem('food'));
 let age = ref(localStorage.getItem('age'));

 function write(key, value) {
   localStorage.setItem(key, value);
 }

 watch(food, (val) => {
   write(food, val)
 })

 watch(age, (val) => {
   write(age, val)
 })

 setTimeout(() => {
   food.value = 'changed'
 }, 2000)

  */
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food" >
    </p>
  </main>
</template>
