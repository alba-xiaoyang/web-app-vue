<template>
  <div>
    <div v-for="day in week" :key="day.id">
      <p>{{ day.day }}</p>
      <p>{{ day.id }}</p>
    </div>

    <button v-on:click="nextWeek">Siguiente semana</button>
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
    }
  }
}
</script>
