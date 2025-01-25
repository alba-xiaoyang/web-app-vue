<template>

  <div class="chat">
    <h2>Chat de grupo</h2>
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
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export default {
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
      unsubscribeMessages: null, // Guardar referencia al listener
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
        container.scrollTop = container.scrollHeight;
      }
    },
  },
  mounted() {
    // Escuchar mensajes en tiempo real
    const messagesRef = collection(db, "groups", this.groupId, "messages");
    const q = query(messagesRef, orderBy("timestamp"));

    this.unsubscribeMessages = onSnapshot(q, (snapshot) => {
      this.messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      this.$nextTick(() => {
        this.scrollToBottom();
      });
    });
  },
  beforeUnmount() {
    // Limpiar listeners al desmontar el componente
    if (this.unsubscribeMessages) {
      this.unsubscribeMessages();
    }
  },
};
</script>


<style scoped>
.chat {
  max-width: 1200px;
  margin: 50px auto;
  padding: 8px;
  background: linear-gradient(to bottom, #ffffff, #f1f5f9);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: 'Arial', sans-serif;
  position: relative;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.messages {
    max-height: 500px;
    max-width: 100%;
    overflow-y: auto;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccd1d9;
    border-radius: 8px;
    background: #fdfdfd;
}

.messages::-webkit-scrollbar {
  width: 5px; /* Ancho de la barra de desplazamiento */
}

.messages::-webkit-scrollbar-thumb {
  background: #78777796; /* Color del "thumb" (parte desplazable) */
  border-radius: 4px;
}

.messages::-webkit-scrollbar-thumb:hover {
  background: #4b4646ad; /* Color del "thumb" al pasar el cursor */
}

.messages::-webkit-scrollbar-track {
  background: #a1a0a053; /* Fondo de la pista de la barra */
}


.message {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.message p {
  margin: 0;
  color: #2c3e50;
}

.message small {
  display: block;
  margin-top: 5px;
  font-size: 0.8rem;
  color: #7f8c8d;
}

.message.mine {
  text-align: right;
  background: #e8f5e9;
}

.message.mine p {
  color: #2e7d32;
}

form {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ccd1d9;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #ecf0f1;
  color: #2c3e50;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  outline: none;
}

button {
  padding: 12px 20px;
  background: #308ff5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  background-color: #004085;
}
</style>


