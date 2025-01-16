<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

  <meta charset="UTF-8">

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
        <RouterLink to="/roulette" id="roulette" class="css-routerLink">
          <img src="/src/components/images/rueda-de-la-fortuna.png" alt="Ruleta">
          <h3>Ruleta</h3>
        </RouterLink>
      </button>
      <button>
        <RouterLink to="/chats" id="chat" class="css-routerLink">
          <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Chat">
          <h3>Chat</h3>
      </RouterLink>
    </button>
    </div>
    <div class="nav-footer">
      <button>
        <RouterLink to="/login" id="logout" class="css-routerLink">
          <img src="/src/components/images/cerrar-sesion.png" alt="Cerrar sesión">
          <h3>Cerrar sesión</h3>
        </RouterLink>
      </button>
    </div>
  </nav>
    <RouterView />

</template>

<style scoped>

.css-routerLink {
  display: flex;
  flex-direction: row;
  color: white;
  text-decoration: none;
  gap: 32px;
}

button:hover img{
  filter:brightness(0);
  transition: filter 0.3s ease;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: var(--rojopastel);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 24px;
  font-family: Questrial, sans-serif;
  font-weight: normal;
}


.nav-header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  width: 100%;
  height: 100px;
  background-color: var(--rojopastel);
  color: white;
  cursor: pointer;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 32px;
  border-radius: 0;
}

button:hover {
  background-color: white;
  color: black;
  border: 0;
  transform: translateY(-2px);
}

button:hover .css-routerLink {
  text-decoration: none;
  transform: translateY(-2px);
  color: black;
}

img {
  padding-bottom: 8px;
  height: 50px;
  width: auto;
  background-color: transparent;
}

.nav-center {
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-footer {
  height: 75px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#logout img{
  height: 40px;
  width: auto;
  background-color: transparent;
}
</style>
