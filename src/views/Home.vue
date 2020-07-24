<template>
  <div class="home">
    <p>{{ count }}</p>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);

    const add = () => {
      store.dispatch("add");
    };

    return {
      count,
      add,
    };
  },

  // render() {
  //   return (
  //     <div class="home">
  //       <p>{this.count}</p>
  //       <button onClick={this.add}>增加</button>
  //     </div>
  //   );
  // },
};
</script>
