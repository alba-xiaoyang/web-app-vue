<script>
//import { RouterLink } from 'vue-router';
export default {name: 'NavBar'}
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
  gap: 24px;
}

button:hover img{
  filter:brightness(0);
  transition: filter 0.3s ease;
}

nav {
  width: 20%;
  height: auto;
  background-color: var(--rojopastel);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto;
  padding-top: 25px;
  padding-bottom: 25px;
  gap: 50px;
  font-size: 24px;
  font-family: Questrial, sans-serif;
  justify-content: space-between;
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
  height: 75px;
  background-color: var(--rojopastel);
  color: white;
  cursor: pointer;
  border: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 28px;
  padding-left: 32px;
  border-radius: 0;
}

button:hover {
  background-color: white;
  color: var(--rojopastel);
  border: 0;

}

img {
  padding-bottom: 8px;
  height: 50px;
  width: auto;
  background-color: transparent;
}

.nav-center {
  height: 225px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
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
