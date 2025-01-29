<template>
  <footer class="web-footer">
  <div class="footer-content">
    <div class="footer-about">
      <h2 class="about-livitt">Sobre Livitt</h2>
      <p>
        Livitt es una app diseñada para mejorar la convivencia en pisos compartidos,
        ofreciendo herramientas para la organización y gestión del hogar. ¡Haz que vivir
        juntos sea más sencillo y agradable!
      </p>
    </div>
    <div class="footer-links">
      <h2 class="fast-link">Enlaces rápidos</h2>
      <ul>
        <div class="column-1">
          <li><a href="https://livitt-landing.netlify.app/">Inicio</a></li> <!-- Agregar hash para sección -->
          <li><a href="https://livitt-landing.netlify.app/#about">Sobre la app</a></li> <!-- Agregar hash para sección -->
          <li><a href="https://livitt-landing.netlify.app/#about-us">Equipo</a></li> <!-- Agregar hash para sección -->
        </div>
        <div class="column-2">
          <li><a href="https://livitt-landing.netlify.app/faqs/">FAQs</a></li>
          <li><a href="https://livitt-landing.netlify.app/contact/">Contacto</a></li>
        </div>
        <div class="column-3">
          <li><a href="https://livitt.netlify.app/">Iniciar sesión</a></li>
          <li><a href="https://livitt.netlify.app/register">Registro</a></li>
        </div>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="politic">&copy; 2025 Livitt. Todos los derechos reservados.</p>
  </div>
</footer>
</template>

<style scoped>
.web-footer {
  background-color: var(--grisclaropastel);
  color: var(--rojopastel);
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding: 0 auto;
}

.footer-content {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #6c7a89;
}

.footer-about {
  height: 150px;
  width: 60%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 32px;
}

.footer-links {
  height: 150px;
  width: 40%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

p, ul {
  font-size: 14px;
  margin: 0;
  color: white;
}

ul {
  width: 80%;
  list-style: none;
  padding: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.column-1, .column-2, .column-3{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 75px;
  gap: 12px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: white;
}

.footer-bottom {
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding-top: 10px;
  font-size: 12px;
  border-top: 1px solid var(--grisoscuropastel);
}

.politic {
  margin: 0 auto;
  padding: 0 auto;
}

.about-livitt{
  color: var(--rojopastel);
}

.fast-link{
  color: var(--rojopastel);
}

.separator {
  color: transparent
}

@media screen and (max-width: 768px) {
  .web-footer {
    height: auto;
    width: 100%;
    padding: 0px;
    text-align: center;
  }

  .footer-content {
    flex-direction: column; /* Cambiar a disposición vertical */
    height: auto;
    width: 100%;
    gap: 6px;
    justify-content: none;
  }

  .footer-about,
  .footer-links {
    width: 100%; /* Ocupa todo el ancho disponible */
    text-align: center; /* Centra el contenido */
    padding: 0px;
    height: auto;
  }

  .footer-about {
    padding: 0px;

    p {
      padding: 0px 12px;
    }
  }

  .footer-links ul {
    flex-direction: column; /* Enlaces en columna */
    gap: 6px; /* Espacio entre columnas */
    padding: 0px;
    padding-bottom: 8px;

  }

  .footer-links .column-1,
  .footer-links .column-2,
  .footer-links .column-3 {
    flex-direction: column; /* Cada columna en una sola fila */
    align-items: center;
    gap: 6px; /* Espacio entre elementos */
    height: auto;
  }

  h2 {
    font-size: 18px; /* Tamaño ajustado */
  }

  p, ul {
    font-size: 14px;
  }

  a {
    font-size: 14px;
  }
}

@media screen and (max-width: 480px) {
  .footer-about,
  .footer-links {
    padding: 0px; /* Espacio interno reducido */
  }

  .footer-about p {
    font-size: 12px; /* Texto más pequeño */
  }

  .footer-links ul {
    gap: 5px; /* Menor espacio entre enlaces */
  }

  h2 {
    font-size: 16px;
  }

  a {
    font-size: 12px;
  }

  .footer-bottom {
    font-size: 10px; /* Ajuste para la parte inferior */
    padding: 5px;
  }
}
</style>
