<script setup>
import { ref } from 'vue';
import RecordRoulette from '../components/RecordRoulette.vue';
import RouletteComponent from '@/components/RouletteComponent.vue';
import ModalRuletteComponent from '@/components/ModalRouletteComponent.vue';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const history = ref([]);
const showAlert = ref(false)
const currentTask = ref('')

function onRouletteSelection(task) {
  currentTask.value = task
  showAlert.value = true
}

function acceptDate(data) {
  saveTaskToFirebase(currentTask.value, data)
  showAlert.value = false
}

async function saveTaskToFirebase(task, date) {

  if (!task || !date) {
    alert("Por favor, selecciona una fecha.");
    return;
  }

  const user = getAuth().currentUser;
  if (!user) {
    alert("Usuario no autenticado.");
    return;
  }

  // Consultar el groupId del usuario actual
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (!userDoc.exists()) {
    alert("No se encontró el grupo del usuario.");
    return;
  }

  const groupId = userDoc.data().groupId;

  try {
    const taskData = {
      username: user.displayName || "Usuario",
      task,
      date,
      isDone: false,
      time: serverTimestamp(),
      userId: user.uid,
      groupId, // Agregar el groupId al documento
    };
    console.log(taskData)

    const taskRef = collection(db, "taskAssignments")
    const result = await addDoc(taskRef, taskData);
    if (result?.id) {
      console.log("Tarea guardada exitosamente.");
    }

  } catch (error) {
    console.error("Error al guardar la tarea:", error);
  }
}

</script>


<template>
  <main class="container animate-appear">
    <div class="roulette-container">
      <div>
        <h2 class="roulette-title">Ruleta de la "suerte"</h2>
        <p>Puedes cambiar la tarea de cada quesito haciendo click 🧀</p>
      </div>
      <div class="box-container">
        <div>
          <RouletteComponent @success="onRouletteSelection" />
        </div>
      </div>
    </div>

    <div class="box-RecordRoulette">
      <RecordRoulette :history="history" />
    </div>

    <ModalRuletteComponent v-show="showAlert" @acceptDate="acceptDate" />
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: row;
  width: 83%;
  gap: 1.5rem;
  padding: 0rem;
}

p {
  margin: 0px;
}

h2 {
  margin: 0px;
}

.roulette-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  margin: 0px;
  height: 100%;
  padding-top: 32px;
}

.roulette-title {
  font-size: 2rem;
  text-align: center;
  width: 100%;
}

.box-container {
  display: flex;
  flex-direction: column;
  margin: 0px;
  width: 100%;
  max-width: 20rem;
  justify-content: space-between;
}

.box-RecordRoulette {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 32px;
}
</style>
