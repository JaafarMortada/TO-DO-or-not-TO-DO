<template>
    <div>
        <v-textarea v-model="newTodoText" label="Add a new TODO" variant="outlined"
            class="!max-w-[500px] !min-w-[500px]"></v-textarea>
        <VueDatePicker v-model="date" :dark=true utc class="mb-5" />
        <v-btn @click="AddTodo" density="default" class="w-full !bg-teal-900 !text-gray-300">Add
            TODO</v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddTodo",
    components: {

    },
})
</script>

<script setup lang="ts">
import { useTodosStore } from '../store';
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const store = useTodosStore();
const newTodoText = ref('');
const date = ref<Date>(new Date);

const AddTodo = async () => {
    await store.addNewTodo({
        text: newTodoText.value,
        time: date.value,
        done: false,
        id: store.all.length + 1
    })
    newTodoText.value = ''
    date.value = new Date
}
</script>