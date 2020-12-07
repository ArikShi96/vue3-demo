<template>
  <div class="todo-list">
    <div class="todo-item" v-for="(item, index) in todo.list" :key="index">
      <span>{{ item.name }}</span>
      <button @click="remove(index)">删除</button>
    </div>
    <div class="todo-action">
      <input type="text" v-model="input" />
      <button @click="add">增加</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const input = ref("");
    const todo = reactive({
      list: [],
    });
    const add = () => {
      if (!input.value) {
        alert("请输入名字");
        return;
      }
      todo.list.push({ index: todo.list + 1, name: input.value });
      input.value = "";
    };
    const remove = (index) => {
      todo.list.splice(index, 1);
    };
    return {
      input,
      todo,
      add,
      remove,
    };
  },
};
</script>
