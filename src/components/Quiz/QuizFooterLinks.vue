<script setup>
  import { inject } from "vue";

  defineProps({
    quiz: Object
  })

  let key = inject('key');
</script>

<template>
  <div>
    <h5>{{ key }}</h5>

    <ul>
      <li><a href="">Get a Job</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
  </div>
</template>