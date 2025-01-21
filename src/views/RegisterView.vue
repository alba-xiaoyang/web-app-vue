<template>
  <div class="register">
    <h1 class="title">Regístrate</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="name">Nombre de usuario</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="email">Correo electrónico</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Registrarse</button>
    </form>
    <p>¿Ya tienes cuenta? <RouterLink to="/">Inicia sesión aquí</RouterLink>.</p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: this.name,
        });

        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: this.name,
          groupId: null,
        });

        this.$router.push("/group");
      } catch (error) {
        alert("Error al registrarse: " + error.message);
      }
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}
form div {
  margin-bottom: 15px;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
div{
  text-align: left;
}
.title {
  text-align: center;
}
p {
  text-align: center;
}
</style>
