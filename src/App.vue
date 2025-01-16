<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
<div class="wrapper">
      <nav>
        <RouterLink to="/" class="task-list">Lista de tareas</RouterLink>
        <RouterLink to="/about" class="log-register">Inicio de sesión/registro</RouterLink>
      </nav>
    </div>
    <body>
      <RouterView />
    </body>
  </header>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f99595;
  color: white;
}

.task-list  {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
}
.task-list:hover {
  color: #7a6464b3;
  padding: 5px;
}

.log-register  {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;

}
.log-register:hover {
  color: #7a6464b3;
  padding: 5px;
}

</style>

