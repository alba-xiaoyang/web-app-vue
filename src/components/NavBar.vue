<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <div class="nav-header">
      <button id="profile">
        <img src="/src/components/images/usuario.png" alt="Foto de perfil" />
        <h3>Perfil</h3>
      </button>
    </div>

    <div class="nav-center">
      <button id="home">
        <img src="/src/components/images/hogar.png" alt="Home" />
        <h3>Home</h3>
      </button>

      <RouterLink to="/roulette" class="link" id="roulette">
        <img src="/src/components/images/rueda-de-la-fortuna.png" alt="Ruleta" />
        <h3 class="router-link-active">Ruleta</h3>
      </RouterLink>

      <button id="chat">
        <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Chat" />
        <h3>Chat</h3>
      </button>
    </div>

    <div class="nav-footer">
      <button id="logout">
        <img src="/src/components/images/cerrar-sesion.png" alt="Cerrar sesión" />
        <h3>Cerrar sesión</h3>
      </button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 20%;
  background-color: var(--rojopastel);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  gap: 50px;
  font-size: 24px;
  font-family: Questrial, sans-serif;
}

.nav-header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-center {
  width: 100%;
  height: 225px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-footer {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button,
.link {
  width: 100%;
  height: 75px;
  background-color: var(--rojopastel);
  color: white;
  cursor: pointer;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 45px;
  padding-left: 32px;
  text-decoration: none;
}

.link:hover,
button:hover {
  background-color: white;
  color: var(--rojopastel);
}

img {
  height: 50px;
  width: auto;
  padding-bottom: 8px;
  background-color: transparent;
}

button:hover img,
.link:hover img {
  filter: brightness(0) saturate(100%);
}

#roulette {}
</style>
