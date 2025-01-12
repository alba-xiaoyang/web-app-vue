<template>
<div class="list-task-done">
          <h1>Tareas terminadas</h1>
          <ul>
            <li>
              <h3>Tarea</h3>
              <div class="data">
                <p>Nombre</p>
                <p>Fecha</p>
              </div>
            </li>
          </ul>
        </div>
</template>

<style>
.list-task-done {
  margin: 20px;
  background-color: var(--verdepastel);
  width: 40%;
  height: 80%;
  border-radius: 12px;
}

.list-task-done h1 {
  text-align: center;
  margin-bottom: 20px;
}

.list-task-done ul {
  list-style-type: disc;
  padding-left: 40px;
}

.list-task-done li {
  margin-bottom: 15px;
}

.list-task-done .data {
  display: flex;
  flex-direction: row;
  gap: 40%;
}

.list-task-done h3 {
  margin: 0;
}

.list-task-done p {
  margin: 5px 0;
}
</style>
