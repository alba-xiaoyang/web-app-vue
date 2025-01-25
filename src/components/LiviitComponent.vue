<template>
  <header class="web-header">
    <h1>Liviit</h1>
    <nav class="buttons" aria-label="Menú de navegación principal">
        <button class="button" data-target="home">Home</button>
        <button class="button" data-target="about">Sobre la app</button>
        <button class="button" data-target="about-us">Sobre nosotros</button>
        <button class="button" id="faqs">FAQS</button>
        <button class="button" id="contact">Contacto</button>
        <button class="button" id="login">Iniciar sesión</button>
        <button class="button" id="registrer">Registrarse</button>
    </nav>
</header>
</template>

<style scoped>
  header {
  background-color: var(--grisclaropastel);
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0.1px 0 5px 6px rgba(1, 0, 0, 0.1);
}

header h1 {
  font-size: 90px;
  height: 150px;
  width: 20%;
  color: var(--rojopastel);
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  background-color: transparent;
  text-shadow:
    -2px -2px 2px rgba(0, 0, 0, 0.4), /* Sombra superior izquierda */
    2px 2px 2px rgba(255, 255, 255, 0.3); /* Luz inferior derecha */
}

nav {
  height: 150px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding-right: 16px;
}

button {
  height: 100%;
  width: 14.29%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--rojopastel);
  background-color: transparent;
  font-size: 20px;
  font-family: Questrial, sans-serif;
  border: transparent;
  border-radius: 0;
  text-shadow:
    -1px -1px 1px rgba(0, 0, 0, 0.4), /* Sombra superior izquierda */
    1px 1px 2px rgba(255, 255, 255, 0.3); /* Luz inferior derecha */
}

button:hover {
  background-color: var(--rojopastel);
  color: var(--grisclaropastel);
  cursor: pointer;
  text-shadow:
    -2px -2px 4px rgba(0, 0, 0, 0.6), /* Sombra más profunda */
    2px 2px 4px rgba(255, 255, 255, 0.5); /* Luz más brillante */
}

</style>
