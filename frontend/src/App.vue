<script setup lang="ts">
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col gap-5">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
