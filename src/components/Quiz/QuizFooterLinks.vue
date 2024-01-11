<script setup>
  import { inject } from "vue";

  defineProps({
    quiz: Object
  })

  let name = inject('name');

  setTimeout(() => {
    name.value = 'A new name'
  }, 2000)
</script>

<template>
  <div>
    <h5>{{ name }}</h5>

    <ul>
      <li><a href="">Get a Job</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
  </div>
</template>