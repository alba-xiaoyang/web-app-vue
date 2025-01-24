<template>
  <div class="chat-view">
    <!-- Botón para abrir/cerrar el chat -->
    <button @click="toggleChat" class="chat-button">
      {{ chatVisible ? "Cerrar Chat" : "Abrir Chat" }}
    </button>

    <!-- Chat -->
    <ChatComponent
      v-if="chatVisible"
      :groupId="groupId"
      :groupName="group.name"
    />
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import ChatComponent from "@/components/ChatComponent.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { ChatComponent, NavBar },
  data() {
    return {
      group: {}, // Información del grupo
      chatVisible: false, // Control de la visibilidad del chat
      groupId: "", // ID del grupo
    };
  },
  created() {
    // Escuchar cambios en el estado de autenticación
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Obtener el usuario actual desde Firestore
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            this.groupId = userSnap.data().groupId;

            if (this.groupId) {
              // Obtener los datos del grupo
              const groupRef = doc(db, "groups", this.groupId);
              const groupSnap = await getDoc(groupRef);

              if (groupSnap.exists()) {
                this.group = groupSnap.data();
              } else {
                alert("El grupo no existe.");
              }
            }
          } else {
            alert("El usuario no tiene un grupo asignado.");
          }
        } catch (error) {
          alert("Error al obtener los datos del grupo: " + error.message);
        }
      } else {
        // Si no hay usuario autenticado, redirigir al login
        this.$router.push("/login");
      }
    });
  },
  methods: {
    toggleChat() {
      this.chatVisible = !this.chatVisible; // Alterna el estado de visibilidad del chat
    },
    async handleLogout() {
      try {
        await signOut(auth); // Cerrar sesión
        this.$router.push("/"); // Redirigir al login
      } catch (error) {
        alert("Error al cerrar sesión: " + error.message);
      }
    }
  },
};
</script>


<style scoped>
.chat-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 250px; /* Ajusta según el ancho del NavBar */
  padding: 20px;
}

.chat-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.chat-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.chat-button:active {
  background-color: #004085;
}
</style>

