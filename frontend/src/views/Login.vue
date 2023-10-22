<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from "../components/forms/LoginForm.vue"

  export default defineComponent({
    name: "Login",
    components:{
      LoginForm,
    }
  })
</script>

<script setup lang="ts">
import { useTodosStore } from '../store';
const store = useTodosStore()

store.resetStore()
localStorage.clear()
</script>
<template>
  <div class="flex flex-col justify-center items-center gap-5 text-xl font-bold">
    <p>LOGIN PAGE</p> 
    <div class="w-[500px]">
      <LoginForm/>
    </div>
  </div>
</template>
