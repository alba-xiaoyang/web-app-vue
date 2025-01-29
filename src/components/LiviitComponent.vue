<script setup>
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open"); // Agrega o quita la clase 'open' al menú
  });

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const targetUrl = button.getAttribute("href");
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });
});
</script>

<template>
<header class="web-header">
  <div class="mobile-header">
    <h1>Liviit</h1>
    <button id="menu-toggle" aria-label="Abrir menú">☰</button>
  </div>
  <nav class="buttons" aria-label="Menú de navegación principal">
      <button class="button" data-target="home" href="https://livitt-landing.netlify.app/">Home</button>
      <button class="button" data-target="about" href="https://livitt-landing.netlify.app/#about">Sobre la app</button>
      <button class="button" data-target="about-us" href="https://livitt-landing.netlify.app/#about-us">Sobre nosotros</button>
      <button class="button" id="faqs" href="https://livitt-landing.netlify.app/faqs/">FAQS</button>
      <button class="button" id="contact" href="https://livitt-landing.netlify.app/contact/">Contacto</button>
      <button class="button" id="login" href="https://livitt.netlify.app/">Iniciar sesión</button>
      <button class="button" id="registrer" href="https://livitt.netlify.app/register">Registrarse</button>
  </nav>
</header>
</template>

<style scoped>

header {
background-color: var(--grisclaropastel);
height: 115px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
}

.mobile-header {
  display: flex;
  flex: row;
}

header h1 {
font-size: 100px;
height: 115px;
width: 20%;
color: var(--rojopastel);
padding-left: 50px;
display: flex;
flex-direction: column;
text-align: left;
justify-content: center;
background-color: transparent;
}

#menu-toggle {
  display: none; /* Ocultar en pantallas grandes */
}


nav {
height: 115px;
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
background-color: transparent;
}

button {
height: 100%;
width: 200px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: var(--rojopastel);
background-color: transparent;
font-size: 20px;
font-family: Questrial, sans-serif;
border: transparent;
}

button:hover {
background-color: var(--rojopastel);
color: var(--grisclaropastel);
cursor: pointer;
}

@media screen and (max-width: 768px) {
  header {
    flex-direction: column;
    height: 100px;
    width: 100%;
  }

  .mobile-header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  header h1 {
    font-size: 40px;
    width: 100px;
    height: 100%;
    text-align: center;
    padding-left: 0;
    margin: 0;
  }

  #menu-toggle {
    height: 100%;
    width: 75px;
    display: block;
    font-size: 28px;
    background: none;
    border: none;
    color: var(--rojopastel);
    cursor: pointer;
  }

  nav {
    display: none;
    width: 100%;
    height: 350px;
    background-color: var(--grisclaropastel);
    flex-direction: column;
    align-items: center;
    position: relative; /* Asegura que no se superponga */
    gap: 10px;
    padding-top: 50px;
  }

  nav.open {
    display: flex;
  }

  .button {
    width: 100%;
    height: auto;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
  }

  .button:hover {
    background-color: var(--rojopastel);
    color: var(--grisclaropastel);
  }
}

</style>
