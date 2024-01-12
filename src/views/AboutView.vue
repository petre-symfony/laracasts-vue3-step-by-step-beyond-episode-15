<script setup>
  import { useFlash } from "@/composables/useFlash.js";
  import { counter } from "@/stores/conterStore.js";

  let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Hey!', 'It works on the about page!', 'info')">Click Me</button>
      The current count is {{ counter.count }}
    </p>
  </div>
</template>
