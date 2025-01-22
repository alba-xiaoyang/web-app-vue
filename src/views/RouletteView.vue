<script setup>
import { ref } from 'vue';
import Roulette from '../components/Roulette.vue';
import RecordRoulette from '../components/RecordRoulette.vue';
import RouletteSettings from '../components/RouletteSettings.vue';

const history = ref([]);

function onRouletteSelection(username, task) {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  history.value.push({
    username: username,
    task: task,
    date: date,
    time: time,
  })
}
</script>


<template>
  <main class="container">
    <div class="roulette-container">
      <h2 class="roulette-title">Ruleta de la "suerte"</h2>
      <div class="box-container">
        <div>
          <Roulette :onRouletteSelection="onRouletteSelection" />
        </div>
      </div>
    </div>

    <div class="box-RecordRoulette">
      <RecordRoulette :history="history" />
    </div>

  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  padding: 0.5rem;
}

.roulette-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.roulette-title {
  font-size: 2rem;
  text-align: center;
  width: 100%;
}

.box-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  justify-content: space-between;
}



.box-RecordRoulette {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>
