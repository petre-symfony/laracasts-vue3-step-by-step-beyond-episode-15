<script setup>
  import { counter } from "@/stores/conterStore.js";
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()">Increment</button>
  </div>
</template>