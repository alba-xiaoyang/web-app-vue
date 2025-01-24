<template>
  <div class="list-task-undone">
    <h1 class="title">Tareas por hacer</h1>
    <ul>
      <li v-for="task in tasksUndone" :key="task.id">
        <div class="task">
          <h3 class="subtitle">{{task.title}}</h3>
          <div class="data">
            <p>{{task.user}}</p>
            <p>20/01/2025</p>
          </div>
        </div>
        <button class="botton-done">Hecho</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebaseConfig";
import { collection, doc, getDoc, onSnapshot, orderBy, query, where } from "firebase/firestore";

export default {
  name: "UndoneList",
  data() {
    return {
      tasksUndone: [],
    };
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
            const tasksQuery = query(tasksRef, where("groupId", "==", groupId), orderBy("date"));



            onSnapshot(tasksQuery, (snapshot) => {
              this.tasksUndone = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
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

<style>
  .list-task-undone {
    width: 40%;
    height: auto;
    background-color: rgba(238, 111, 111, 0.3); ;
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
    align-items: center;
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
    text-align: center;
  }

  .data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px;
  }

  button {
    height: 50px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--verdepastel);
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
    border: 2px solid var(--verdepastel);
    color: var(--verdepastel);
  }

  @media (max-width: 480px) {
    .list-task-undone {
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
