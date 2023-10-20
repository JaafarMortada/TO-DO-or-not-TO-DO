<template>
    <div class="flex justify-around">
      <div class="flex flex-col items-center gap-5 max-w-[500px] min-w-[500px]">
        <div class="flex justify-center text-xl font-bold">TODO LIST</div>
        <Loading v-if="store.isLoading" class="mt-20"/>
        <div v-else class="flex flex-col gap-2 max-h-[70vh] overflow-scroll">
          <ListItem v-if="store.all.length > 0" v-for="todo in store.all" :key="todo.id" :todoItem="todo" />
          <p v-else class="text-center mt-20">Your TODO list is still empty.</p>  
        </div>
      </div>
      <div class="flex flex-col items-center gap-5 max-w-[500px] min-w-[500px]">
        <div class="flex justify-center text-xl font-bold">ADD TODO</div>
        <AddTodo />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useTodosStore } from '../store';
  import { onMounted } from 'vue';
  import Loading from "../components/Loading.vue"
  import ListItem from "../components/ListItem.vue"
  import AddTodo from "../components/AddTodo.vue"
  const store = useTodosStore();

  onMounted(async () => {
    await store.fetchTodos();
  });

  </script>
  
  <script lang="ts">
import { defineComponent } from 'vue';
  export default defineComponent({
    name: "TodoList",
    components:{
        Loading, ListItem, AddTodo
    }
  })
</script>