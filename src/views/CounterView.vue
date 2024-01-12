<script setup>
  import { useCounterStore } from "@/stores/conterStore.js";

  let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button @click="counter.count++">Increment</button>
  </div>
</template>