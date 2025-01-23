<script setup>
import CalendarComponent from '@/components/CalendarComponent.vue';
import DoneList from '@/components/DoneList.vue';
import TaskForm from '@/components/TaskForm.vue';
import UndoneList from '@/components/UndoneList.vue';

</script>

<template>
  <div class="container">
    <CalendarComponent />
    <TaskForm />
    <div class="lists">
      <DoneList />
      <UndoneList />
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
  padding: 10px;
}

.lists {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  padding-top: 10px;
}

@media (max-width: 480px) {
  .container {
    padding: 20px 20px 0px 20px;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: auto;
  }

  .lists {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding-bottom: 70px;
  }
}
</style>
