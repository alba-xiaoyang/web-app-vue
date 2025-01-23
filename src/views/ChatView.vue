<template>
  <div class="chat">
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
  components: { ChatComponent },
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
.home {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.chat-button {
  padding: 10px 20px;
  margin: 20px;
  margin-left: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  gap: 15px;
  align-items: center;

}
.logout-button {
  padding: 50px 20px;
  margin: 20px 0;
  background-color: #ff1900;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  gap: 15px;
}
.logout-button:hover {
  background-color: #c30303;
}
.chat-button:hover {
  background-color: #0056b3;
}
</style>
