<template>
  <div class="list-task-undone">
          <h1>Tareas por hacer</h1>
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
.list-task-undone {
  margin: 20px;
  background-color: rgba(238, 111, 111, 0.3); ;
  height: 80%;
  width: 40%;
  border-radius: 12px;
}

.list-task-undone h1 {
  text-align: center;
  margin-bottom: 20px;
}

.list-task-undone ul {
  list-style-type: disc;
  padding-left: 40px;
}

.list-task-undone li {
  margin-bottom: 15px;
}

.list-task-undone .data {
  display: flex;
  flex-direction: row;
  gap: 40%;
}

.list-task-undone h3 {
  margin: 0;
}

.list-task-undone p {
  margin: 5px 0;
}
</style>
