<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const auth = getAuth();
    const userGroupId = ref(null); // ID del grupo del usuario logueado
    const taskHistory = ref([]); // Historial de tareas

    // Cargar el historial de tareas del grupo
    const listenToGroupTasks = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("Usuario autenticado:", user);

          // Obtener el groupId del usuario actual
          getDoc(doc(db, "users", user.uid)).then((userDoc) => {
            if (!userDoc.exists()) {
              console.error("El usuario no pertenece a ningún grupo.");
              return;
            }

            userGroupId.value = userDoc.data().groupId;

            // Escuchar cambios en tiempo real
            const tasksRef = collection(db, "taskAssignments");
            const tasksQuery = query(tasksRef, where("groupId", "==", userGroupId.value));

            onSnapshot(tasksQuery, (snapshot) => {
              taskHistory.value = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              console.log("Historial actualizado:", taskHistory.value);
            });
          });
        } else {
          console.error("Usuario no autenticado.");
        }
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
    <h2>Historial de Tareas</h2>
    <ul>
      <li v-for="task in taskHistory" :key="task.id">
        <p><strong>Tarea:</strong> {{ task.task }}</p>
        <p><strong>Fecha:</strong> {{ task.date }}</p>
        <p><strong>Asignado por:</strong> {{ task.username }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-history {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>



