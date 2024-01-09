<script>
  import TheWelcome from '../components/TheWelcome.vue';
  import { onMounted, ref } from "vue";

  export default {
    components: { TheWelcome },
    setup() {
      let message = ref('Hello World!');

      setTimeout(() => {
        message.value = 'I have been changed'
      }, 2000);

      return {
        message
      }
    }
    /*data() {
      return {
        message: 'Hello World'
      }
    },
    mounted() {
      alert('mounted');
    }*/
  }
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>

    <input type="text" v-model="message">
  </main>
</template>
