<script setup>
  import Quiz from "@/components/Quiz/Quiz.vue";

  let state = {name: 'My First Quiz', questions: []};
</script>

<template>
  <main>
    <Quiz :quiz="state" />
  </main>
</template>
