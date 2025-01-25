<script>
import { listenTasksAssignments } from '@/utils/listenTasksAssignments.js'
import Spinner from '@/components/Spinner.vue'

export default {
  components: { Spinner },
  mounted() {
    listenTasksAssignments((tasks) => {
      this.taskHistory = tasks
      this.loading = false
    })
  },
  data() {
    return {
      taskHistory: [],
      loading: true,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es-ES', options)
    },
  },
}
</script>

<template>
  <div class="container">
    <Spinner v-if="loading" message="Cargando historial de sorteos" />
    <div v-else class="task-history">
      <h2>Historial de Sorteos</h2>
      <div class="task-container">
        <div class="task-card" v-for="task in taskHistory" :key="task.id">
          <p class="task-title">{{ task.task }}</p>
          <p><strong>Fecha:</strong> {{ formatDate(task.date) }}</p>
          <p><strong>Miembro:</strong> {{ task.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100dvh;
}

.task-history {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #343a40;
}

.task-container {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  width: 100%;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.task-card {
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20rem;
  height: 10rem;
}

.task-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.task-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #495057;
  font-weight: bold;
}

p {
  margin: 6px 0;
  color: #6c757d;
  font-size: 1.1rem;
}

p strong {
  color: #343a40;
}
</style>
