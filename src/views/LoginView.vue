<script setup>
import LiviitBar from "../components/LiviitBar.vue";
</script>

<template>
  <div class="wrapper">
    <div class="liviit-bar">
      <LiviitBar />
    </div>
    <div class="login">
      <h1 class="title">Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Correo electrónico</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Contraseña</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit" class="login-button">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <RouterLink to="/register">Regístrate aquí</RouterLink>.</p>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Intentar iniciar sesión con Firebase
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        if (user) {
          // Si el usuario está autenticado, redirigir al Home
          this.$router.push("/home");
        }
      } catch (error) {
        // Manejo de errores
        alert("Error al iniciar sesión: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.liviit-bar {
  width: 100dvw;
}

.login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9d4;
}

.title {
  text-align: center;
}


form div {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 15px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #347937;
}

.login-button {
  font-size: 17px;
  align-items: center;
}
</style>
