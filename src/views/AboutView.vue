<script setup>
  import { useFlash } from "@/composables/useFlash.js";

  let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('It works on the about page!')">Click Me</button>
    </p>
  </div>
</template>
