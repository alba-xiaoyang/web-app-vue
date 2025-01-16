<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>

  <meta charset="UTF-8">

  <NavBar/>
  <component :is="currentView" />

</template>

<style scoped>

</style>
