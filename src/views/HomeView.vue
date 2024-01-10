<script setup>
 import { useStorage } from "@/composables/useStorage.js";

 let food = useStorage('food');
 let age = useStorage('age')
</script>

<template>
  <main>
    <form >
      <textarea style="width: 100%; height: 300px">Hi there</textarea>
    </form>
  </main>
</template>
