<script setup>
  import {ref, onMounted } from "vue";

  let textarea = ref(null);

  function onTabPress(e) {
    let t = textarea.value;

    // get caret position/selection
    let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

    //set textarea value to: text before caret + tab + text after caret
    t.value = val.substring(0, start) + "\t" + val.substring(end);

    //got caret at right position again
    t.selectionStart = t.selectionEnd = start + 1;
  }
</script>

<template>
  <main>
    <form >
      <textarea ref="textarea" @keydown.tab.prevent="onTabPress" style="width: 100%; height: 300px">Hi there</textarea>
    </form>
  </main>
</template>
