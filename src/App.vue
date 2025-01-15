<script setup>
import AddTask from './components/AddTask.vue';
import DoneList from './components/DoneList.vue';
import NavBar from './components/NavBar.vue';
import TheCalendar from './components/TheCalendar.vue';
import UndoneList from './components/UndoneList.vue';
</script>

<template>

  <meta charset="UTF-8">

  <NavBar/>
  <div class="container">
    <TheCalendar/>
    <AddTask/>
    <div class="lists">
      <DoneList/>
      <UndoneList/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%; /* Cambiar de 80% a 100% para usar todo el ancho */
  height: auto; /* Permitir altura dinámica */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Mejor alineación en pantallas pequeñas */
  gap: 1rem; /* Añadir separación entre elementos */
}

.lists {
  height: auto; /* Altura dinámica */
  width: 100%;
  display: flex;
  flex-direction: column; /* Coloca los elementos en una columna en lugar de fila */
  gap: 1rem; /* Añade separación entre listas */
  align-items: center;
}

@media (min-width: 1024px) {
  .lists {
    flex-direction: row; /* En pantallas grandes, cambia a fila */
    justify-content: space-around;
  }
}

</style>
