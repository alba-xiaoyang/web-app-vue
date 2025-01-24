<template>
  <div class="calendar-papi">
    <button class="btn-week" v-on:click="prevWeek">←</button>

    <div class="calendar-day" v-for="day in week" :key="day.id">
      <p class="day-title">{{ day.day }}</p>
      <p>Comida</p>
    </div>

    <button class="btn-week" v-on:click="nextWeek">→</button>
  </div>
</template>

<style>
.calendar-papi {
  display: flex;
}

.btn-week {
  border: none;
  background-color: rgb(16, 24, 30);
  color: white;
  border-radius: 4px;
}

.btn-week:hover {
  background-color: blue;
}

.calendar-day {
  text-align: center;
  border: 1px solid #e2e2e2af;
  width: 200px;
  border-radius: 8px;
  margin: 4px;
  padding: 12px;
}

.day-title {
  font-size: 42px;
  line-height: normal;
  font-weight: bold;
}
</style>

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
    prevWeek() {
      this.currentWeek--;
      this.week = this.getWeekDays(this.currentWeek)
    }
  }
}
</script>
