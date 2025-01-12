<template>

  <nav>
        <div class="nav-header">
          <button id="profile">
            <img src="/src/components/images/usuario.png" alt="Foto de perfil">
            <h3>Perfil</h3>
          </button>
        </div>
        <div class="nav-center">
          <button id="home">
            <img src="/src/components/images/hogar.png" alt="Home">
            <h3>Home</h3>
          </button>
          <button id="roulette">
            <img src="/src/components/images/rueda-de-la-fortuna.png" alt="Ruleta">
            <h3>Ruleta</h3>
          </button>
          <button id="chat">
            <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Chat">
            <h3>Chat</h3>
          </button>
        </div>
        <div class="nav-footer">
          <button id="logout">
            <img src="/src/components/images/cerrar-sesion.png" alt="Cerrar sesión">
            <h3>Cerrar sesión</h3>
          </button>
        </div>
      </nav>

  </template>

  <style>

  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");

  :root {
    --azuloscuropastel: #9abfcf;
    --azulclaropastel: #afced1;
    --verdepastel: #6cc099;
    --amarillopastel:  #ffdc9c;
    --rosapastel: #ffb6ad;
    --rojopastel: #ee6f6f;
    --grispastel: #e5decf;
    --grisoscuropastel: #afb7bb;
    --grisclaropastel: #e8e8e8;
    --bordemaqueta: 2px solid black;
  }

  nav {
    width: 20%;
    height: auto;
    background-color: var(--azuloscuropastel);
    display: flex;
    flex-direction: column;

    /* justify-content: center; */

    align-items: center;
    padding-top: 50px;
    padding-bottom: 25px;
    gap: 50px;
    font-size: 24px;
    font-family: Questrial, sans-serif;
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
    background-color: var(--azuloscuropastel);
    color: white;
    cursor: pointer;
    border: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 45px;
  }

  button:hover {
    background-color: white;
    color: var(--azuloscuropastel);
  }

  img {
    padding-bottom: 8px; /* Ajuste fino */
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
  }

  .nav-footer {
    height: 75px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  </style>
