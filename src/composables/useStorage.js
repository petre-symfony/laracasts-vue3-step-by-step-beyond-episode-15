import { ref, watch } from "vue";

export function useStorage(key) {
  let storeVal = localStorage.getItem(key);

  let val = ref(storeVal);

  watch(val, () => {
    write()
  })

  function write() {
    if (val.value === ''){
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, val.value);
    }
  }

  return val
}