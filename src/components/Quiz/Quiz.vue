<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
  import { provide } from "vue";

  defineProps({quiz: Object})

  provide('key', 'Hello There');
</script>

<template>
  <QuizHeader />

  <QuizQuestion />

  <QuizFooter :quiz="quiz"/>
</template>