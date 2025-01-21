<template>
  <div class="calendar">

    <!-- days sourced from: https://nationaldaycalendar.com/february/ -->
    <h1>February 2022</h1>
    <p>Holidays and Daily Observances in the United States</p>
    <ul>
      <li><time datetime="2022-02-01">1</time>Dark Chocolate Day</li>
      <li><time datetime="2022-02-02">2</time>Groundhog Day</li>
      <li><time datetime="2022-02-03">3</time>Carrot Cake Day</li>
      <li><time datetime="2022-02-04">4</time>Wear Red Day</li>
      <li><time datetime="2022-02-05">5</time>Weatherperson's Day</li>
      <li><time datetime="2022-02-06">6</time>Chopsticks Day</li>
      <li><time datetime="2022-02-07">7</time>Periodic Table Day</li>
      <li><time datetime="2022-02-08">8</time>Kite Flying Day</li>
      <li><time datetime="2022-02-09">9</time>Pizza Day</li>
      <li><time datetime="2022-02-10">10</time>Umbrella Day</li>
      <li><time datetime="2022-02-11">11</time>Inventor's Day</li>
      <li><time datetime="2022-02-12">12</time>Global Movie Day</li>
      <li><time datetime="2022-02-13">13</time>Tortellini Day</li>
      <li><time datetime="2022-02-14">14</time>Valentine's Day</li>
      <li><time datetime="2022-02-15">15</time>Gumdrop Day</li>
      <li><time datetime="2022-02-16">16</time>Do a Grouch a Favor Day</li>
      <li><time datetime="2022-02-17">17</time>Cabbage Day</li>
      <li><time datetime="2022-02-18">18</time>Battery Day</li>
      <li class="today"><time datetime="2022-02-19">19</time>Chocolate Mint Day</li>
      <li><time datetime="2022-02-20">20</time>Love Your Pet Day</li>
      <li><time datetime="2022-02-21">21</time>President's Day</li>
      <li><time datetime="2022-02-22">22</time>Cook a Sweet Potato Day</li>
      <li><time datetime="2022-02-23">23</time>Tile Day</li>
      <li><time datetime="2022-02-24">24</time>Toast Day</li>
      <li><time datetime="2022-02-25">25</time>Clam Chowder Day</li>
      <li><time datetime="2022-02-26">26</time>Pistachio Day</li>
      <li><time datetime="2022-02-27">27</time>Polar Bear Day</li>
      <li><time datetime="2022-02-28">28</time>Tooth Fairy Day</li>
    </ul>

  </div>
</template>

<style scoped>
.calendar {
  height: 100%; /* Permitir que tome todo el espacio disponible */
  width: 100%; /* Usar el ancho completo del contenedor */
  background-color: var(--azulclaropastel);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem; /* Espaciado interno para que no quede pegado a los bordes */
  box-sizing: border-box;
  border-radius: 12px;
}

h1 {
  font-weight: 800;
  margin: 0.5rem 0; /* Reducir el margen superior */
  font-size: 1.5rem; /* Ajustar tamaño para pantallas más pequeñas */
  text-align: center;
}

p {
  margin: 0.5rem 0 1rem;
  font-size: 1rem;
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Adaptar columnas al ancho disponible */
  gap: 0.5rem; /* Espaciado entre elementos */
  width: 100%; /* Ocupar todo el ancho disponible */
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ajustar al ancho de la celda */
  height: auto;
  padding: 1rem;
  font-weight: 300;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
  box-sizing: border-box;
}

time {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.today {
  background: #ffffff70;
}

.today time {
  font-weight: 800;
}

@media (max-width: 480px) {
  .calendar {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  ul {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Ajuste para elementos más pequeños */
    gap: 0.3rem; /* Reducir el espaciado */
  }

  li {
    padding: 0.5rem;
    font-size: 0.7rem;
  }

  time {
    font-size: 1rem;
  }
}
</style>
