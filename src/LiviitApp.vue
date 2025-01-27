<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';
import HeaderMobile from './views/HeaderMobile.vue';


const route = useRoute();
const hideNavbarRoutes = ['Login', 'Register', 'Group'];

const hideNavBar = computed(() => hideNavbarRoutes.includes(route.name));
</script>

<template>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

  <div id="app">
    <main :class="!hideNavBar ? 'papi' : ''">
      <HeaderMobile v-if="!hideNavBar" />
      <NavBar v-if="!hideNavBar" />
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.papi {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: nowrap;
}

@media (max-width: 480px) {
  .papi {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 750px;
  }
}
</style>
