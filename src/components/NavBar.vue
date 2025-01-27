<script>
import { auth } from '@/firebaseConfig';
import { signOut } from 'firebase/auth';


export default {
  methods: {
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
<template>
  <nav>
    <div class="nav-header">
      <button>
        <RouterLink to="/profile" id="profile" class="css-routerLink">
          <img src="/src/components/images/usuario.png" alt="Foto de perfil">
          <h3>Perfil</h3>
        </RouterLink>
      </button>
    </div>
    <div class="nav-center">
      <button>
        <RouterLink to="/home" id="home" class="css-routerLink">
          <img src="/src/components/images/hogar.png" alt="Home">
          <h3>Home</h3>
        </RouterLink>
      </button>
      <button>
        <RouterLink to="/roulette" class="css-routerLink">
          <img src="/src/components/images/rueda-de-la-fortuna.png" alt="Ruleta">
          <h3>Ruleta</h3>
        </RouterLink>
      </button>
      <button>
        <RouterLink to="/chat" id="chat" class="css-routerLink">
          <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Chat">
          <h3>Chat</h3>
        </RouterLink>
      </button>
    </div>
    <div class="nav-footer">
      <button @click="handleLogout" to="/" id="logout" class="css-routerLink">
        <img src="/src/components/images/cerrar-sesion.png" alt="Cerrar sesión">
        <h3>Cerrar sesión</h3>
      </button>
    </div>
  </nav>
</template>



<style scoped>
nav {
  width: 17%;
  height: 100dvh;
  background-color: #e230309a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: Questrial, sans-serif;
  gap: 60px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.nav-header,
.nav-center,
.nav-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

button {
  width: 100%;
  height: 75px;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 32px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.css-routerLink {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 20px;
  transition: color 0.3s ease;
}

.css-routerLink:hover {
  color: var(--rojoclaro);
}

.css-routerLink h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

img {
  height: 50px;
  width: auto;
  background-color: transparent;
  transition: transform 0.3s ease;
}

button:hover img {
  transform: scale(1.1);
}

#logout img {
  height: 40px;
}

@media (max-width: 480px) {
  nav {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    width: 480px;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    padding: 0;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-footer, .nav-header{
    height: auto;
    width: auto;
    padding: 32px;
  }

  .nav-center{
    display: flex;
    flex-direction: row;
  }

  button {
    flex-direction: column;
    width: auto;
    height: 100%;
    padding: 0;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    margin: auto;
  }

  .css-routerLink {
    flex-direction: column;
    gap: 4px;
    align-items: center;
  }

  .css-routerLink h3 {
    display: none;
  }

  img {
    height: 24px;
    width: auto;
  }

  #logout {
    height: 18px;
    width: auto;
  }
}

@media (max-width: 480px) and (orientation: landscape) {
  nav {
    top: 0;
    bottom: auto;
    left: 0;
    width: 80px;
    height: 100%;
    flex-direction: column;
  }

  .nav-header,
  .nav-center,
  .nav-footer {
    gap: 10px;
    width: 100%;
  }

  button {
    padding-left: 0;
    height: 50px;
    width: 100%;
  }

  .css-routerLink h3 {
    display: none;
  }

  img {
    height: 30px;
  }

  #logout {
    height: 20px;
  }
}
</style>
