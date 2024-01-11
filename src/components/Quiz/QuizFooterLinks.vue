<script setup>
  import { state } from "@/stores/quizStore.js";
</script>

<template>
  <div>
    <h1>{{ state.name }}</h1>

    <ul>
      <li><a href="">Get a Job</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
  </div>
</template>