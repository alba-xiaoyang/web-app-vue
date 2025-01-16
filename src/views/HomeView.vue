<script setup>
import DoneList from '@/components/DoneList.vue';
import TaskForm from '@/components/TaskForm.vue';
import TheCalendar from '@/components/TheCalendar.vue';
import UndoneList from '@/components/UndoneList.vue';


</script>

<template>
  <div class="container">
    <TheCalendar/>
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
  height: auto; /* Permitir altura dinámica */
  display: flex;
  flex-direction: column;
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
</style>
