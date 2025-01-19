<script setup>
import { RouterLink } from 'vue-router';
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
</template>

<style scoped>
.css-routerLink {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 20px;
}

.css-routerLink h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
}

button:hover img{
  filter:brightness(0);
  transition: filter 0.3s ease;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: var(--rojopastel);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  font-size: 16px;
  font-family: Questrial, sans-serif;
}

.nav-header, .nav-center, .nav-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

button {
  width: 100%;
  height: 75px;
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

#logout img{
  height: 40px;
  width: auto;
  background-color: transparent;
}

@media (max-width: 480px) {
  nav {
    position: fixed;
    bottom: 0;
    top: auto; /* Garantiza que esté abajo */
    left: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    background-color: var(--rojopastel);
    z-index: 1000;
  }

  .nav-header, .nav-center, .nav-footer {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    width: 100%;
    height: 100%;
  }

  button {
    width: auto;
    height: 100%;
    padding: 0;
    justify-content: center;
    border-radius: 0;
  }

  .css-routerLink {
    flex-direction: column;
    gap: 0;
  }

  .css-routerLink h3 {
    display: none; /* Oculta el texto para solo mostrar íconos */
  }

  img {
    height: 30px;
    width: auto;
  }

  #logout img{
    height: 25px;
    width: auto;
  }
}

@media (max-width: 480px) and (orientation: landscape) {
  /* Modo horizontal: barra lateral */
  nav {
    position: fixed;
    bottom: auto;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  .nav-header, .nav-center, .nav-footer {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  button {
    width: 100%;
    height: 50px;
    padding-left: 10px;
  }

  img {
    height: 30px;
  }

  .css-routerLink h3 {
    display: block;
    font-size: 12px;
  }
}
</style>
