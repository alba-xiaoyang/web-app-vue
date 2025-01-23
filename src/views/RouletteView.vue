<script setup>
import { ref } from 'vue';
import RecordRoulette from '../components/RecordRoulette.vue';
import RouletteComponent from '@/components/RouletteComponent.vue';
import ModalRuletaComponent from '@/components/ModalRuletaComponent.vue';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const history = ref([]);
const showAlert = ref(false)
const currentTask = ref('')

function onRouletteSelection(task) {
  console.log("PAPPI LLAMA", task)
  currentTask.value = task
  showAlert.value = true
}

function acceptDate(data) {
  console.log(data)
  saveTaskToFirebase(currentTask.value, data)
  showAlert.value = false
}

async function saveTaskToFirebase(task, date) {
  console.log("ALERT tast", task)

  if (!task || !date) {
    console.log("ALERT", date)
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
  <main class="container">
    <div class="roulette-container">
      <h2 class="roulette-title">Ruleta de la "suerte"</h2>
      <div class="box-container">
        <div>
          <RouletteComponent @success="onRouletteSelection" />
        </div>
      </div>
    </div>

    <div class="box-RecordRoulette">
      <RecordRoulette :history="history" />
    </div>

    <ModalRuletaComponent v-show="showAlert" @acceptDate="acceptDate" />
  </main>
</template>

<style>
.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  padding: 0.5rem;
}

.roulette-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.roulette-title {
  font-size: 2rem;
  text-align: center;
  width: 100%;
}

.box-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  justify-content: space-between;
}



.box-RecordRoulette {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>
