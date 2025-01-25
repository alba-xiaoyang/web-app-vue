<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, onSnapshot, doc, getDoc, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ref, onMounted } from "vue";
import { listenTasksAssignments } from '@/utils/listenTasksAssignments.js'

export default {
  setup() {
    const taskHistory = ref([]);

    // Cargar el historial de tareas del grupo
    const listenToGroupTasks = () => {
      listenTasksAssignments((tasks) => {
        taskHistory.value = tasks;
      });
    };

    onMounted(() => {
      listenToGroupTasks();
    });

    return { taskHistory };
  },
};
</script>

<template>
  <div class="task-history">
    <h2>Historial de Sorteos</h2>
    <div class="task-container">
      <div class="task-card" v-for="task in taskHistory" :key="task.id">
        <p class="task-title"><strong>Tarea:</strong> {{ task.task }}</p>
        <p><strong>Fecha:</strong> {{ task.date }}</p>
        <p><strong>Miembro:</strong> {{ task.username }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
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
  max-height: 600px; /* Altura más grande para el contenedor */
  overflow-y: auto; /* Scroll interno */
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #ffffff;
  background-color: #f4f6f7;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.task-card {
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px; /* Más espacio interno */
  margin-bottom: 15px; /* Espaciado entre tarjetas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex; /* Flex para estructura más amplia */
  flex-direction: column;
  justify-content: space-between;
  height: 150px; /* Altura más grande */
}

.task-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.task-title {
  font-size: 1.5rem; /* Fuente más grande */
  margin-bottom: 10px;
  color: #495057;
}

p {
  margin: 6px 0;
  color: #6c757d;
  font-size: 1.1rem; /* Texto más grande */
}

p strong {
  color: #343a40;
}


</style>



