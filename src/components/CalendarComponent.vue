<template>
  <Spinner v-if="loading" message="Cargando tus tareas" />

  <div v-else class="calendar-container">
    <button class="btn-week" v-on:click="previousWeek">←</button>

    <div
      class="calendar-day"
      :class="{
        'calendar-day__today': isSameDay(new Date(), day.date),
        'calendar-day__before': isBeforeThat(day.date),
      }"
      v-for="day in week"
      :key="day.id"
    >
      <p class="day-title">
        {{ day.day }}/ {{ day.month }}
      </p>
      <div class="day-tasks">
        <p v-for="task in day.tasks" :key="task.id" class="task-title" :class="{ 'task-title__done': task.isDone }">{{ task.task }}</p>
      </div>
      <input
        v-if="day.tasks.length > 0"
        type="checkbox"
        class="isdone-checkbox"
        v-model="day.isDone"
        @change="toggleCompletion(day)"
      />
    </div>

    <button class="btn-week" v-on:click="nextWeek">→</button>

  </div>
</template>

<style>
.calendar-container {
  display: flex;
}

.btn-week {
  border: none;
  background-color: rgba(62, 62, 156, 0.677);
  color: white;
  border-radius: 4px;
}

.btn-week:hover {
  background-color: #263463bd;
}

.calendar-day {
  background-color: rgba(255, 255, 255, 0.359);
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  width: 8.75rem;
  border: 1px solid var(--grisoscuropastel);
  border-radius: 8px;
  margin: 4px;
  padding: 4px;
  padding-top: 12px;
  position: relative; /* Para posicionar el checkbox */
}

.calendar-day__today {
  background-color: #4d9b9b9d;
}

.calendar-day__before {
  background-color: rgba(170, 165, 165, 0.762);
  text-decoration: line-through;
}

.day-title {
  width: 100%;
  font-size: 32px;
  line-height: normal;
  font-weight: bold;
  margin: 1.5rem 3rem;
  background-color: white;
  border-radius: 30px;
  opacity: 0.7;
}

.isdone-checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--grisoscuropastel);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.isdone-checkbox:checked {
  background-color: var(--verdepastel);
  border-color: green;
}

.isdone-checkbox:checked::after {
  content: '✓';
  color: white;
  font-weight: bold;
  display: block;
}

.day-tasks {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}

.task-title {
  font-size: 1.5rem;
  margin: 0;
  padding-bottom: 0.5rem;
}

.task-title__done {
  text-decoration: line-through;
}

@media (max-width: 768px) {
  .calendar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 7rem;
    width: 100%;
  }

  .btn-week {
    width: 100%;
    margin: 8px 0;
  }

  .calendar-day {
    width: 100%;
    max-width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: row;
  }

  .isdone-checkbox{
    display: flex;
    flex-direction: row-reverse;
  }

  .day-title {
    font-size: 1rem;
  }

  .task-title {
    font-size: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .calendar-container {
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .calendar-day {
    height: 3rem;
    max-width: 130px;
  }

  .day-title {
    font-size: 1.1rem;
  }
}

</style>

<script>
import { listenTasksAssignments } from '@/utils/listenTasksAssignments.js'
import { getTasksInDay } from '@/utils/getTasksInDay.js'
import { markTaskAsDone } from '@/utils/markTaskAsDone.js'
import { markTaskAsUndone } from '@/utils/markTaskAsUndone.js'
import { isSameDay } from '@/utils/isSameDay.js'
import Spinner from '@/components/Spinner.vue'



export default {
  components: { Spinner },
  data() {
    return {
      loading: true,
      currentWeek: 0,
      week: [],
      tasks: [],
    }
  },
  async mounted() {
    listenTasksAssignments((tasksFromDatabase) => {
      this.tasks = tasksFromDatabase

      this.week = this.getWeekDays(this.currentWeek)

      this.loading = false;
    })
  },
  methods: {
    isSameDay,
    getWeekDays(offset = 0) {
      const today = new Date()
      const dayOfWeek = today.getDay()
      const startOfWeek = today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1) + offset * 7 // Ajusta el inicio de la semana para que comience el lunes
      const weekDays = []

      for (let i = 0; i < 7; i++) {
        const day = new Date(today) // Crea una nueva instancia de Date
        day.setDate(startOfWeek + i) // Ajusta la fecha

        const tasksOfTheDay = getTasksInDay(day, this.tasks)

        let isDone = false

        if (tasksOfTheDay.length > 0) {
          isDone = tasksOfTheDay.every((task) => task.isDone)
        }

        weekDays.push({
          id: day.toISOString(),
          day: day.getDate().toString().padStart(2, '0'),
          month: (day.getMonth() + 1).toString().padStart(2, '0'),
          year: day.getFullYear(),
          date: day,
          isDone: isDone,
          tasks: tasksOfTheDay,
        })
      }
      return weekDays
    },
    nextWeek() {
      this.currentWeek++
      this.week = this.getWeekDays(this.currentWeek)
    },
    previousWeek() {
      this.currentWeek--
      this.week = this.getWeekDays(this.currentWeek)
    },
    toggleCompletion(day) {
      const tasks = day.tasks

      tasks.forEach((task) => {
        task.isDone = day.isDone

        if (day.isDone) {
          markTaskAsDone(task.id)
        } else {
          markTaskAsUndone(task.id)
        }
      })
    },
    isBeforeThat(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      const dateAtStartOfDay = new Date(date)
      dateAtStartOfDay.setHours(0, 0, 0, 0)

      return dateAtStartOfDay.getTime() < today.getTime()
    },
  },
}
</script>
