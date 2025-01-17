<script setup>

</script>

<template>
  <div class="container">
    <div class="roulette-body"></div>
    <div class="roulette-record">
      <div class="list">
        <h1 class="title">Tareas terminadas</h1>
        <ul>
          <li>
            <div class="round">
              <h3 class="subtitle">Tareas asignadas</h3>
              <div class="data">
                <p>Juan Pérez</p>
                <p>Fecha de la tirada</p>
                <p>Hora de la tirada</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
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

.roulette-record {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
}

.list {
  width: 97%;
  height: auto;
  background-color: rgb(255, 220, 156, 0.3);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  height: auto;
  width: 90%;
  border: 1px solid black;
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

.round {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5px;
  gap: 24px;
}
</style>
