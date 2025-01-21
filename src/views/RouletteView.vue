<script setup>
import RecordRoulette from '@/components/RecordRoulette.vue';


</script>

<template>
  <div class="container">
    <div class="roulette-body"></div>
    <RecordRoulette />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-left: 250px;
  gap: 24px;
}

.roulette-body {
  height: 400px;
  width: 100%;
  background-color: var(--amarillopastel);
}

@media (max-width: 480px) {
  .container {
    margin: 0;
    padding: 12px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 70px;
  }
}
</style>
