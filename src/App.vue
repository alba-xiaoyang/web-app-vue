<script setup>
import AddTask from './components/AddTask.vue';
import DoneList from './components/DoneList.vue';
import NavBar from './components/NavBar.vue';
import TheCalendar from './components/TheCalendar.vue';
import UndoneList from './components/UndoneList.vue';
</script>

<template>

  <meta charset="UTF-8">

  <NavBar/>
  <div class="container">
    <TheCalendar/>
    <AddTask/>
    <div class="lists">
      <DoneList/>
      <UndoneList/>
    </div>
  </div>
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

body {
  background-color: white;
  margin: 0;
  padding: 0;
  font-family: Questrial, sans-serif;
  font-size: large;
}

.container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lists {
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
