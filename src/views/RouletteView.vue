<script setup>
import Roulette from '../components/Roulette.vue';
import NavBar from '../components/NavBar.vue';
import TasksAssignment from '../components/TasksAssignment.vue';
</script>

<template>
  <main class="container">
    <div class="box-TasksAssignment">
      <TasksAssignment />
    </div>
    <div class="box-container">
      <Roulette />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

}

.box-container {
  display: flex;
  width: 100%;
  margin-left: 10%;

}

.box-TasksAssignment {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
