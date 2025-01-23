<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';


const route = useRoute();
const hideNavbarRoutes = ['Login', 'Register', 'Group'];

// Computar si el navbar debe ocultarse
const hideNavBar = computed(() => hideNavbarRoutes.includes(route.name));
</script>

<template>
<meta charset="UTF-8">

  <div id="app">
    <main>
      <NavBar v-if ="!hideNavBar"/>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>



</style>
