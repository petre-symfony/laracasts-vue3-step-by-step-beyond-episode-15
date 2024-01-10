import {ref} from "vue";

export function useStorage(key) {
  let storeVal = localStorage.getItem(key);

  let val = ref(storeVal);
  
  return val
}