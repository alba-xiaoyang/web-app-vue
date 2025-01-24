<template>
  <div class="list-task-undone">
    <h1 class="title">Tareas por hacer</h1>
    <ul>
      <li v-for="task in tasksUndone" :key="task.id">
        <div class="task">
          <h3 class="subtitle">{{task.task}}</h3>
          <div class="data">
            <p><strong>Fecha:</strong> {{ task.date }}</p>
          </div>
        </div>
        <button class="botton-done" @click="markAsDone(task.id)">Hecho</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { collection, doc, getDoc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";

export default {
  name: "UndoneList",
  data() {
    return {
      tasksUndone: [],
    };
  },

  methods: {
    async markAsDone(taskId) {
      console.log("Marcar tarea como hecha:", taskId);
      const ref = doc(db, "taskAssignments", taskId);

      await updateDoc(ref, {
        isDone: true
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

            // Escuchar cambios en tiempo real
            const tasksRef = collection(db, "taskAssignments");
            const tasksQuery = query(tasksRef, where("groupId", "==", groupId), where("userId", "==", user.uid), orderBy("date"));

            onSnapshot(tasksQuery, (snapshot) => {
              this.tasksUndone = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              })).filter(task => !task.isDone);
              console.log("Historial actualizado:", this.tasksUndone);
            });
          });
        } else {
          console.error("Usuario no autenticado.");
        }
      });
  }
}
</script>

<style scoped>
  .list-task-undone {
    width: 35%;
    height: 400px; /* Puedes ajustar esta altura según tus necesidades */
    background-color: var(--grispastel);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }

  .list-task-undone:hover {
    transform: translateY(-2px);
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    color: rgb(59, 51, 51);
    margin-bottom: 12px;
    margin-left: 29%;
    text-align: center;
    text-transform: uppercase;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 500;
    color: black;
    text-align: left;
    margin-bottom: 8px;
  }

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    flex-grow: 1;
    max-height: calc(100% - 60px);
    overflow-y: auto;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid var(--grisoscuropastel);
    gap: 15px;
    align-items: center;
  }

  li:last-child {
    border-bottom: none;
  }

  .task {
    width: calc(100% - 70px);
    color: var(--azuloscuropastel);
    word-wrap: break-word;
  }

  .data {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: black;
    margin-bottom: 8px;
  }

  .data p {
    margin: 5px 0;
  }

  button {
    height: 45px;
    width: 120px;
    background-color: var(--verdepastel);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: white;
    border: 2px solid var(--verdepastel);
    color: var(--verdepastel);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    .list-task-undone {
      width: 90%;
      margin: 0 auto;
      height: 350px;
    }

    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .subtitle {
      font-size: 18px;
      margin-bottom: 8px;
    }

    .data {
      font-size: 14px;
    }

    button {
      width: 80%;
      height: 40px;
      font-size: 12px;
    }
  }
</style>



