<script setup>
 import { ref } from "vue";

 let food = ref('');
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food">
    </p>
  </main>
</template>
