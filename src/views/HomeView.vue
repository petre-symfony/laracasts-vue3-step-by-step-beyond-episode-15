<script setup>
 import { ref } from "vue";

 let food = ref(localStorage.getItem('food'));
 let age = ref(localStorage.getItem('age'));

 function write(key, value) {
   localStorage.setItem(key, value);
 }

 setTimeout(() => {
   food.value = 'changed'
 }, 2000)
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food" @input="write('food', food)">
    </p>

    <p>
      How old are you? <input type="text" v-model="age" @input="write('age', age)">
    </p>
  </main>
</template>
