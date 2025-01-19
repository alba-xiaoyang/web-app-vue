<script setup>
import DoneList from '@/components/DoneList.vue';
import TaskForm from '@/components/TaskForm.vue';
import TheCalendar from '@/components/TheCalendar.vue';
import UndoneList from '@/components/UndoneList.vue';


</script>

<template>
  <div class="container">
    <TheCalendar/>
    <!--Cambiamos el formulario por un buscador-->
    <TaskForm/>
    <div class="lists">
      <DoneList/>
      <UndoneList/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 300px;
}

.lists {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 24px;
}

/* Media Queries para modo mobile (vertical) */
@media screen and (max-width: 768px) and (orientation: portrait) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }

  .container > *:not(.lists) {
    margin: 0 auto;
    width: 100%; /* Los elementos ocupan todo el ancho */
    align-items: center;
  }

  .lists {
    flex-direction: column;
    align-items: center;
    gap: 1rem; /* Espaciado entre las listas */
  }
}

/* Media Queries para modo horizontal (tablets y desktop) */
@media screen and (min-width: 769px), (orientation: landscape) {
  .container {
    flex-direction: column;
    margin-left: 300px; /* Ajusta margen lateral para incluir el navBar */
  }

  TheCalendar {
    height: auto;
    margin-bottom: 1rem;
  }

  .lists {
    flex-direction: row; /* Coloca las listas lado a lado */
    justify-content: center;
    gap: 2rem;
  }
}
</style>
