<template>
    <div class="flex gap-10 border-b-2 border-gray-500 h-16 items-center justify-between m-0 px-10 drop-shadow-xl">
        <router-link class="font-black text-gray-700" to="/">TODO or not TODO</router-link>
        <div class="flex gap-10">
            <router-link class="m-0 p-0 text-gray-700 font-black" to="/login">Login</router-link>
            <router-link class="m-0 p-0 text-gray-700 font-black" to="/todo-list">TodoList</router-link>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Navbar",
    components: {

    }
})
</script>