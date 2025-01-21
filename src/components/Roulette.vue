<script setup>
import { useTemplateRef } from 'vue'


const roulette = useTemplateRef('roulette-table')

const cheeses = ["Cocinar", "Baño", "Basura", "Cocina", "Salón", "Comprar"];
const cheeseDegreeRange = 60;

// Chesse are rotated by 50%
const circleDegreeOffset = cheeseDegreeRange / 2;

let totalSpinDegrees = 0;

function spinRoulette() {
  const degree = Math.floor(Math.random() * 360);
  const completeTurnsDegrees = 360 * 5 + degree;
  roulette.value.style.transform = `rotate(-${totalSpinDegrees + completeTurnsDegrees}deg)`;
  totalSpinDegrees += completeTurnsDegrees;

  const degreesRoulette = (totalSpinDegrees + circleDegreeOffset) % 360;

  const cheeseGradesRoulette = Math.ceil((degreesRoulette / cheeseDegreeRange));
  const selectedCheese = cheeses[cheeseGradesRoulette - 1];

  console.log(selectedCheese, cheeseGradesRoulette, degreesRoulette);
}

</script>


<template>
  <div id="roulette">
    <div ref="roulette-table" id="roulette-table" class="roulette-container">

      <div class="roulette-container cheese-container cook-container">
        <p>Cocinar</p>
      </div>


      <div class="roulette-container cheese-container bath-container">
        <p>Baño</p>
      </div>


      <div class="roulette-container cheese-container trash-container">
        <p>Basura</p>
      </div>


      <div class="roulette-container cheese-container kitchen-container">
        <p>Cocina</p>
      </div>


      <div class="roulette-container cheese-container lounge-container">
        <p>Salón</p>
      </div>


      <div class="roulette-container cheese-container buy-container">
        <p>Comprar</p>
      </div>

    </div>
    <img @click="spinRoulette" id="spinbutton" class="tap" src="../../public/tap.svg" alt="">

    <img class="arrow" src="../../public/arrow.svg" alt="">
  </div>


</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

body {
  background-color: #e8e8e8;
  margin-top: 20px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

}

.roulette-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#roulette {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: solid 6px hsl(180deg 4% 24%);
}

#roulette-table {
  transition: transform ease-in-out 2.5s;
}

.cheese-container {
  width: 13.25rem;
  height: 11.25rem;
  position: absolute;
  font-family: Nunito, sans-serif;
  font-weight: bold;
}

.cheese-container>p {
  writing-mode: vertical-lr;
}

.cook-container {
  background-image: linear-gradient(hsl(152.14deg 40% 35%), hsl(152.14deg 40% 70%));
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%);
  transform-origin: bottom;

}

.bath-container {
  background-image: linear-gradient(hsl(185.29deg 40% 35%), hsl(185.29deg 40% 70%));
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(60deg);
  transform-origin: bottom;

}

.trash-container {
  background-image: linear-gradient(hsl(198.11deg 40% 35%), hsl(198.11deg 40% 64%));
  background-color: #9abfcf;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(120deg);
  transform-origin: bottom;

}

.kitchen-container {
  background-image: linear-gradient(hsl(0deg 40% 40%), hsl(0deg 40% 70%));
  background-color: #ee6f6f;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(180deg);
  transform-origin: bottom;

}

.lounge-container {
  background-image: linear-gradient(hsl(7deg 40% 55%), hsl(7deg 40% 80%));
  background-color: #ffb6ad;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(240deg);
  transform-origin: bottom;

}

.buy-container {
  background-image: linear-gradient(hsl(39deg 40% 50%), hsl(39deg 40% 80%));
  background-color: #ffdc9c;
  clip-path: polygon(100% 0, 50% 100%, 0% 0%);
  transform: translateY(-50%) rotateZ(300deg);
  transform-origin: bottom;

}

.tap {
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%) translateY(-50%);
}

.tap:hover {
  animation: pulse 1s infinite ease-in-out alternate;
}

@keyframes pulse {
  from {
    transform: translate(-50%) translateY(-50%) scale(1);
  }

  to {
    transform: translate(-50%) translateY(-50%) scale(1.2);
  }
}

.arrow {
  width: 100px;
  height: 25px;
  z-index: 1;
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translate(-50%) translateY(-10px);
}
</style>
