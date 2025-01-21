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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  padding: 25px;
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

@media (max-width: 480px) {
  .container {
    padding: 20px 20px 0px 20px;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%; /* Asegura que ocupe todo el ancho de la pantalla */
  }

  .container > * {
    margin: 0 auto;
    width: 100%; /* Cada elemento ocupa todo el ancho */
  }

  .lists {
    flex-direction: column; /* Listas en columnas */
    align-items: center;
    width: 100%; /* Asegura que ocupen todo el ancho */
    gap: 1rem; /* Espaciado entre listas */
    padding-bottom: 70px;
  }
}
</style>
