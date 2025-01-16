<template>
  <div class="about">
    <h1 class="title">Liviit</h1>

    <div class="form">
      <input type="text" v-model="name" placeholder="Usuario" />
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Contraseña" />
      <div class="buttons">
        <button @click="signIn">Iniciar Sesión</button>
        <button @click="singUp">Registrarse</button>
      </div>
    </div>

    <button class="show-user" @click="mostrarUser">Mostrar usuario</button>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      errorMessaje: ""
    };
  },
  methods: {
    signIn() {
      this.errorMessaje = "";
      signInWithEmailAndPassword(auth, this.email, this.password).then((user) => {
        updateProfile(user, { displayName: this.name })
          .then(() => {
            console.log("Nombre del usuario actualizado exitosamente.");
            this.email = ""; // Limpiar los inputs
            this.password = "";
            this.name = "";
            this.$router.push('/group'); // Redirigir a la vista del grupo
          })
      }).catch((error) => {
        console.log("Error al iniciar sesión", error);
        if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
            this.errorMessage = "Usuario o contraseña incorrecta"; // Mostrar mensaje de error
          } else {
            this.errorMessage = "Ocurrió un error al iniciar sesión"; // Mensaje genérico
          }
      });
    },
    singUp() {
    this.errorMessage = ""; // Resetear mensajes de error
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Guardar el nombre del usuario en el perfil
        updateProfile(user, { displayName: this.name })
          .then(() => {
            console.log("Nombre del usuario actualizado exitosamente.");
            this.email = ""; // Limpiar los inputs
            this.password = "";
            this.name = "";
            this.$router.push('/group'); // Redirigir a la vista del grupo
          })
          .catch((error) => {
            console.error("Error al actualizar el perfil", error);
          });
      })
      .catch((error) => {
        console.log("Error al crear el usuario", error);
        this.errorMessage = "Ocurrió un error al crear el usuario";
      });
    },
    mostrarUser() {
      const user = auth.currentUser
      console.log("USER", user.uid);
    }
  },
  mounted() {
    // this.mostrarUser()
    auth.onAuthStateChanged((user) => {
      console.log("USER", user);
      this.user = user
    })
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px; /* Altura completa de la ventana */
  background-color: #ffffff; /* Fondo claro */
}

.title {
  font-size: 50px;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #fb8787;
  font-family: 'Roboto', sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* Espacio entre elementos */
  width: 100%; /* Ancho completo */
  max-width: 400px; /* Limitar el ancho del formulario */
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px #0000001a; /* Sombra para resaltar el formulario */
}

input {
  width: 80%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

}

input:focus {
  outline: none;
  border-color: #fb8787;
  box-shadow: 0 0 5px #fb878780;
}

.buttons {
  display: flex;
  gap: 1rem; /* Espacio entre botones */
}

button {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  opacity: 0.5;
  background-color: #f78e7c5c;
}

.show-user {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #fb8787;
  color: #fb8787;
  border-radius: 5px;
}

.show-user:hover {
  background: #fb8787;
  color: white;
}
</style>
