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
  padding: 25px;
  margin-left: 300px;
  gap: 24px;
}

.roulette-body {
  height: 400px;
  width: 100%;
  background-color: var(--amarillopastel);
}
</style>
