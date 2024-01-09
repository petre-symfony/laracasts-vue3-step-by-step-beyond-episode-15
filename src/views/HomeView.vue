<script>
  import TheWelcome from '../components/TheWelcome.vue';
  import { onMounted } from "vue";

  export default {
    components: { TheWelcome },
    setup() {
      onMounted(() => {
        alert('Hi there');
      })
      return {
        message: 'Hello World'
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
  </main>
</template>
