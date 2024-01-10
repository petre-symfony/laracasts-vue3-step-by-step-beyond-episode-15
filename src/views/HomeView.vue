<script>
  export default {
    methods: {
      flash(message) {
        alert(message)
      }
    }
  }
</script>

<template>
  <main>
    <p>
      <button @click="flash('It works!')">Click Me</button>
    </p>
  </main>
</template>
