<template>
<div class="list-task-done">
  <h1>Tareas terminadas</h1>
  <ul>
    <li>
      <div class="task">
        <h3>Tarea 1</h3>
        <div class="data">
          <p>Juan Pérez</p>
          <p>20/01/2025</p>
        </div>
      </div>
      <button>Sin hacer</button>
    </li>
  </ul>
</div>
</template>

<style>
.list-task-done {
  width: 40%;
  height: auto;
  background-color: rgb(108, 192, 153, 0.3);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  list-style-type: disc;
  border: 2px solid black;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
}

.task {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.data {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
}

button {
  display: inline-flex;
  align-items: center;
  background-color: var(--rojopastel);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: white;
  border: 2px solid var(--rojopastel);
  color: var(--rojopastel);
}
</style>
