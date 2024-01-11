<script setup>
  import { state } from "@/stores/quizStore.js";
</script>

<template>
  <h1>{{ state.name }}</h1>
</template>