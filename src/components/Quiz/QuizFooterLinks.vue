<script setup>
  import { inject } from "vue";

  let quiz = inject('quiz');
</script>

<template>
  <div>
    <h1>{{ quiz.name }}</h1>

    <ul>
      <li><a href="">Get a Job</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
  </div>
</template>