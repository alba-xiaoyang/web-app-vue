<template>
  <div class="list-task-done">
    <h1 class="title">Tareas terminadas</h1>
    <ul>
      <li v-for="task in tasksDone" :key="task.id">
        <div class="task">
          <h3 class="subtitle">{{task.task}}</h3>
          <div class="data">
            <p>{{task.user}}</p>
            <p>{{ task.date }}</p>
          </div>
        </div>
        <button class="botton-undone" @click="markAsUndone(task.id)">Sin hacer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { collection, doc, getDoc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";

export default {
  name: "DoneList",
  data() {
    return {
      tasksDone: [],
    };
  },

  methods: {
    async markAsUndone(taskId) {
      console.log("Marcar tarea como sin hacer:", taskId);
      const ref = doc(db, "taskAssignments", taskId);

      // Cambiar el estado de la tarea a 'Sin hacer' (isDone: false)
      await updateDoc(ref, {
        isDone: false
      });
    },
  },

  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuario autenticado:", user);

        // Obtener el groupId del usuario actual
        getDoc(doc(db, "users", user.uid)).then((userDoc) => {
          if (!userDoc.exists()) {
            console.error("El usuario no pertenece a ningún grupo.");
            return;
          }

          const groupId = userDoc.data().groupId;

          // Escuchar cambios en tiempo real para las tareas hechas (isDone: true)
          const tasksRef = collection(db, "taskAssignments");
          const tasksQuery = query(tasksRef, where("groupId", "==", groupId), where("isDone", "==", true), orderBy("date"));

          onSnapshot(tasksQuery, (snapshot) => {
            this.tasksDone = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log("Historial de tareas terminadas:", this.tasksDone);
          });
        });
      } else {
        console.error("Usuario no autenticado.");
      }
    });
  },
};
</script>


  <style scoped>
  .list-task-done {
    width: 40%;
    height: auto;
    background-color: rgb(108, 192, 153, 0.3);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    height: auto;
    width: 80%;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
    width: 100%;
    gap: 12px;
  }

  .task {
    width: 100%;

  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 24px;
    font-weight: bold;
    align-items: flex-start;
  }

  .data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px;
    align-items: flex-start;
  }

  button {
    height: 50px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--rojopastel);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: white;
    border: 2px solid var(--rojopastel);
    color: var(--rojopastel);
  }

  @media (max-width: 480px) {
    .list-task-done {
      width: 90%;
      margin: 0 auto;
      padding: 16px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .task {
      width: 100%;
    }

    .title {
      font-size: 28px;
      text-align: center;
    }

    .subtitle {
      font-size: 20px;
      text-align: center;
    }

    .data {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }

    button {
      width: 90%;
      height: 45px;
    }
  }
  </style>
