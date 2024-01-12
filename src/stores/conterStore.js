import {reactive} from "vue";

export let counter = reactive({
  //state
  count: 0,

  //actions
  increment() {
    if (this.count > 10) {
      return;
    }
    this.count += 1;
  }
})