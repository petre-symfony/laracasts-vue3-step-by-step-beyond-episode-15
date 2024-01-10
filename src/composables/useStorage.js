import { ref, watch } from "vue";

export function useStorage(key) {
  let storeVal = localStorage.getItem(key);

  let val = ref(storeVal);

  watch(val, () => {
    write()
  })

  function write() {
    localStorage.setItem(key, val.value);
  }

  return val
}