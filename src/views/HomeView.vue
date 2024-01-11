<script setup>
  import TabbableTextarea from "@/components/TabbableTextarea.vue";
  import Quiz from "@/components/Quiz/Quiz.vue";
  import {ref} from "vue";

  let comment = ref('test value');

  setTimeout(() => {
    comment.value = 'It work!'
  }, 3000)
</script>

<template>
  <main>
    <Quiz :quiz="{name: 'My First Quiz', questions: []}" />
  </main>
</template>
