<template>
    <div v-if="todoItem" class="flex justify-between border-2 border-gray-700 rounded-sm p-2 bg-gray-400 max-w-[500px] min-w-[500px] drop-shadow-xl ">
        <div class="flex flex-col gap-2  ">
            <span class="text-[24px] font-semibold">{{ todoItem.text }}</span>
            <span class="text-[16px] font-medium text-gray-700 ">{{ moment(todoItem.time).format("MMMM Do YYYY, h:mm:ss a")
            }}</span>
        </div>
        <button
            class="flex justify-center items-center bg-gray-600 drop-shadow-xl min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] text-gray-300 font-medium text-[12px] ml-5 rounded-full"
            :class="{ 'bg-teal-900 cursor-default ': todoItem.done, 'hover:scale-105 transition-all': !todoItem.done }"
            @click="markAsDone(todoItem.id)">
            <Transition>
                <span v-if="todoItem.done">Done</span>
                
            </Transition>
            <span v-if="!todoItem.done">Mark As Done</span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useTodosStore } from '../store';

const todosStore = useTodosStore()
defineProps({
    todoItem: Object,

})

const markAsDone = (id: number) => {
  todosStore.setDone(id);
};
</script>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment'

export default defineComponent({
    name: "ListItem",
   
})
</script>

