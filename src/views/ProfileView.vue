<script setup>
import { ref, onMounted } from "vue";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

// Referencias para datos del usuario
const userName = ref("Cargando...");
const userGroup = ref("Sin grupo");
const isEditing = ref(false); // Indica si se está editando el nombre de usuario

// Función para cargar datos del usuario
const loadUserData = async () => {
  const user = auth.currentUser;

  if (user) {
    userName.value = user.displayName || "Usuario desconocido";

    // Obtener datos adicionales de Firestore (si es necesario)
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      userGroup.value = userDoc.data().groupId || "Sin grupo";
    }
  } else {
    console.error("No hay un usuario autenticado.");
  }
};

// Función para habilitar la edición
const enableEditing = () => {
  isEditing.value = true;
};

// Función para guardar los cambios
const saveChanges = async () => {
  const user = auth.currentUser;

  if (user) {
    try {
      // Actualizar nombre en Firebase Authentication
      await updateProfile(user, {
        displayName: userName.value,
      });

      // Actualizar nombre en Firestore (si es necesario)
      await updateDoc(doc(db, "users", user.uid), {
        name: userName.value,
      });

      alert("Nombre de usuario actualizado correctamente.");
      isEditing.value = false;
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      alert("Error al guardar los cambios.");
    }
  }
};

// Cargar datos al montar el componente
onMounted(loadUserData);
</script>

<template>
  <div class="container">
    <div class="card-profile">
      <div class="card-header">
        <div class="profile-photo">
          <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Foto de perfil de {{ userName }}">
        </div>
      </div>
      <div class="card-body">
        <div class="name-profile">
          <h3>Nombre de usuario</h3>
          <!-- Campo editable si está en modo edición -->
          <input
            type="text"
            v-model="userName"
            :readonly="!isEditing"
            :class="{ editable: isEditing }"
          />
        </div>
        <div class="houses-profile">
          <h3>Grupo</h3>
          <!-- Grupo no editable -->
          <input type="text" :placeholder="userGroup" readonly />
        </div>
      </div>
      <div class="card-footer">
        <!-- Botón para habilitar edición -->
        <button class="edit" @click="enableEditing" v-if="!isEditing">Editar</button>
        <!-- Botón para guardar cambios -->
        <button class="save" @click="saveChanges" :disabled="!isEditing">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-left: 125px;
}

.card-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 400px;
  border-radius: 12px;
  background-color: var(--azulclaropastel);
  padding-top: 50px;
  padding-bottom: 50px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.card-body {
  width: 80%;
}

input {
  width: 100%;
  height: 32px;
  background-color: white;
  color: black;
  border: 0;
  border-radius: 5px;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.save {
  background-color: var(--rojopastel);
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-left: 10px;
  box-shadow: 2px 3px 4px #0606061a;
}

.save:hover {
  background-color: rgba(214, 121, 121, 0.721);
  border: 1px solid var(--rojopastel);
  transform: translateY(-2px);
}

/* Estilos adicionales para edición */
input.editable {
  border: 1px solid #007bff;
  background-color: #f0f8ff;
}

.edit {
  background-color: #58c4df;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  gap: 10px;
  box-shadow: 2px 3px 4px #0606061a;
}

.edit:hover {
  background-color: #0796acbc;
  transform: translateY(-2px);
}
</style>

