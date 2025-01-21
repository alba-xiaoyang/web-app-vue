<script setup>

const { history } = defineProps({
  history: {
    type: Array
  }
})

</script>


<template>
  <div class="roulette-record">
    <div class="list">
      <h1 class="title">Historial de sorteos</h1>
      <ul>

        <li v-for="(result,index) in history" :key="index">
          <div class="round">
            <h3 class="subtitle">{{ result.task }}</h3>
            <div class="data">
              <p>{{ result.username }}</p>
              <p>Fecha de la tirada</p>
              <p>Hora de la tirada</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.roulette-record {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgb(255, 220, 156, 0.3);
  border-radius: 12px;
}

.list {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  height: 100%;
  width: 90%;
}

li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  gap: 12px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.round {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
}

.subtitle {
  font-size: 1.25rem;
  font-weight: bold;
  text-align: start;
  width: 30%;
}

.data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  gap: 24px;
  width: 70%;
}
</style>
