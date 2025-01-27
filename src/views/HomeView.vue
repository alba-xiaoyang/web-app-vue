<script setup>
import CalendarComponent from '@/components/CalendarComponent.vue'
import DoneList from '@/components/DoneList.vue'
import UndoneList from '@/components/UndoneList.vue'
</script>

<template>
  <div class="container animate-appear">
    <CalendarComponent />

    <div class="lists">
      <DoneList />
      <UndoneList />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 83%;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
  align-items: center;
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
    margin: 0px;
    margin-top: 44px;
    width: 100%;
    height: auto;
  }

  .lists {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding-bottom: 30px;
    height: auto;
  }
}
</style>
