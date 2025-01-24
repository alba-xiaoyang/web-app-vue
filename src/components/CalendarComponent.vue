<template>
  <div class="calendar-container">
    <div class="calendar">
      <div class="calendar-header">
        <div v-for="day in week" :key="day.date" class="day-header">
          <p class="day-name day-name-short">
            {{ getDayOfTheWeekName(day.date).substr(0,3) }}
          </p>
          <p class="day-name day-name-full">
            {{ getDayOfTheWeekName(day.date) }}
          </p>
          <p class="day-number">{{ day.day }}</p>
          <p class="month-name">{{ getMonthName(day.date) }}</p>
        </div>
      </div>

      <div class="calendar-body">
        <div v-for="day in week" :key="day.date" class="day-cell">
          <!-- Add your events or content here -->
        </div>
      </div>

      <button v-on:click="nextWeek">Siguiente semana</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentWeek: 0,
      week: []
    }
  },
  mounted() {
    console.log("YEYEY")
    this.week = this.getWeekDays()
    console.log("week", this.week)
  },
  methods: {
    getWeekDays(offset = 0) {
      const today = new Date();
      const dayOfWeek = today.getDay(); // Obtiene el día de la semana (0 = domingo, 1 = lunes, ..., 6 = sábado)
      const startOfWeek = today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + offset * 7; // Ajusta el inicio de la semana para que comience el lunes
      const weekDays = [];

      for (let i = 0; i < 7; i++) {
        const day = new Date(today); // Crea una nueva instancia de Date
        day.setDate(startOfWeek + i); // Ajusta la fecha
        weekDays.push({
          id: day.toISOString(),
          day: day.getDate(),
          month: day.getMonth() + 1, // Los meses son 0-indexados
          year: day.getFullYear(),
          date: day,
          tasks: []
        });
      }
      return weekDays;
    },
    previousWeek() {
      return this.getWeekDays(-1); // Llama a la función con offset -1
    },
    nextWeek() {
      this.currentWeek++;
      console.log("nextWeek", this.currentWeek)
      this.week = this.getWeekDays(this.currentWeek)
      console.log("nextWeek week:", this.week)
    },
    getDayOfTheWeekName(date) {
      const name = date.toLocaleDateString('es-ES', { weekday: 'long' });

      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    getMonthName(date) {
      const name = date.toLocaleDateString('es-ES', { month: 'long' });
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
}
</script>

<style scoped>
.calendar-container {
  padding: 1rem;
}

.calendar {
  background-color: var(--white);
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.day-header {
  color: var(--gray-600);
}

.day-name {
  font-weight: 600;
}

.day-number {
  font-size: 0.875rem;
}

.day-name,
.day-number {
  margin: 0;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  padding: 1rem;
}

.day-cell {
  min-height: 100px;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: background-color 0.2s;
}

.day-cell:hover {
  background-color: var(--rojopastel);
}

@media (max-width: 768px) {
  .day-name-full {
    display: none;
  }
}

@media (min-width: 769px) {
  .day-name-short {
    display: none;
  }
}

button {
  background-color: var(--azuloscuropastel);
  margin: auto;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

button:hover {
  background-color: var(--azulclaropastel);
  color: black;
}

.month-name {
  font-size: 0.875rem;
  color: #888;
  margin-top: 2px;
}
</style>
