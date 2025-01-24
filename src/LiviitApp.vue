<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';


const route = useRoute();
const hideNavbarRoutes = ['Login', 'Register', 'Group'];

const hideNavBar = computed(() => hideNavbarRoutes.includes(route.name));
</script>

<template>
  <meta charset="UTF-8">

  <div id="app">
    <main class="papi">
      <NavBar v-if="!hideNavBar" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.papi {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>
