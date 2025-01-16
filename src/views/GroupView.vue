<template>
  <div class="group-view">
    <h1>Bienvenido, {{ userName }}</h1>
    <p>Elige una opción:</p>

    <div class="actions">
      <button @click="createGroup">Crear un grupo</button>
      <div>
        <input v-model="groupId" placeholder="Ingrese el ID del grupo" />
        <button @click="joinGroup">Unirse a un grupo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
      name: "", // Usuario actual
      groupId: "", // ID del grupo ingresado
    };
  },
  methods: {
    createGroup() {
      // Lógica para crear un grupo (lo implementarás luego)
      alert("Funcionalidad de crear un grupo no implementada aún.");
    },
    joinGroup() {
      if (!this.groupId) {
        alert("Por favor, ingrese un ID válido.");
        return;
      }
      // Lógica para unirse a un grupo (lo implementarás luego)
      alert(`Intentando unirse al grupo con ID: ${this.groupId}`);
    },
  },
  mounted() {
    const user = auth.currentUser;
    if (user) {
      this.userName = user.displayName || "Usuario"; // Obtener el nombre del usuario o usar "Usuario" por defecto
    } else {
      this.$router.push("/"); // Redirigir al login si no está autenticado
    }
  },
};
</script>

<style scoped>
.group-view {
  text-align: center;
  padding: 2rem;
}

.actions {
  margin-top: 2rem;
}

input {
  padding: 0.5rem;
  margin-right: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
