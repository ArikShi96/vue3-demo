<template>
  <div class="home">
    <p>count: {{ count }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <button @click="add">增加</button>
  </div>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from "vue";
export default {
  setup() {
    // 获取当前上下文信息
    const current = getCurrentInstance();
    console.log(current.ctx);

    // 声明 count 变量，初始值为 0
    const count = ref(0);

    // 定义 add 方法
    const add = () => {
      count.value++;
    };

    // 定义 watch，需要手动引入 watch 方法
    watch(
      () => count.value,
      (val, oldVal) => {
        console.log(`new count: ${val}，old count: ${oldVal}`);
      }
    );

    // 定义computed，同样需要手动引入 computed 方法
    const doubleCount = computed(() => count.value * 2);

    return {
      count,
      add,
      doubleCount,
    };
  },
};
</script>
