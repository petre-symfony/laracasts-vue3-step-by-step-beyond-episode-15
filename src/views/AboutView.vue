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
  <div>
    <p>
      <button @click="flash('It works on the about page!')">Click Me</button>
    </p>
  </div>
</template>
