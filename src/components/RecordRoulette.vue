<template>
  <div class="roulette-record">
    <div class="list">
      <h1 class="title">Historial de sorteos</h1>
      <ul>
        <li>
          <div class="round">
            <h3 class="subtitle">Tarea sorteada</h3>
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
</template>

<style scoped>

.roulette-record {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
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
  font-size: 32px;
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
  font-size: 24px;
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

@media (max-width: 480px) {
  .roulette-record {
    width: 95%;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
  }

  p {
    font-size: 12px;
  }
}
</style>
