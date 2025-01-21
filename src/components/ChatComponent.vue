<template>
  <NavBar />
  <div class="chat">
    <h2>Chat del Grupo: {{ groupId }}</h2>
    <div class="messages" ref="messagesContainer">
      <div
        v-for="message in messages"
        :key="message.id"
        class="message"
        :class="{ mine: message.sender === userId }"
      >
        <p><strong>{{ message.senderName }}:</strong> {{ message.text }}</p>
        <small>{{ new Date(message.timestamp?.seconds * 1000)
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</small>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        v-model="newMessage"
        placeholder="Escribe un mensaje..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc, onSnapshot, query, orderBy, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import NavBar from "./NavBar.vue";

export default {
  components: {
    NavBar,
  },
  props: {
    groupId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      messages: [],
      newMessage: "",
      userId: auth.currentUser?.uid || "",
      userName: auth.currentUser?.displayName || "Usuario",
    };
  },
  methods: {
    async sendMessage() {
      if (!this.newMessage.trim()) return;

      const messageData = {
        text: this.newMessage.trim(),
        sender: this.userId,
        senderName: this.userName,
        timestamp: new Date(),
      };

      try {
        await addDoc(collection(db, "groups", this.groupId, "messages"), messageData);
        this.newMessage = ""; // Limpiar el campo de entrada
      } catch (error) {
        console.error("Error enviando el mensaje: ", error);
      }
    },
    scrollToBottom() {
      const container = this.$refs.messagesContainer;
      if (container) {
        container.scrollTop = container.scrollHeight; // Asegurarte de que el scroll vaya hasta el final
      }
    },
  },
  mounted() {
    const userDocRef = doc(db, "users", this.userId);
    getDoc(userDocRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          this.userName = docSnap.data().name || "Usuario"; // Cargamos el nombre desde Firestore
        }
      })
      .catch((error) => {
        console.error("Error al obtener el nombre del usuario:", error);
      });

    const messagesRef = collection(db, "groups", this.groupId, "messages");
    const q = query(messagesRef, orderBy("timestamp"));

    // Escucha en tiempo real para los mensajes
    onSnapshot(q, (snapshot) => {
      this.messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Desplazar hacia abajo después de que se actualicen los mensajes
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    });
  },
};
</script>

<style scoped>
.chat {
  max-width: 600px;
  margin: 20px auto;
  margin-left: 35%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.messages {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
}

.message {
  margin-bottom: 10px;
}

.message.mine {
  text-align: right;
}

form {
  display: flex;
}

input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}
</style>

