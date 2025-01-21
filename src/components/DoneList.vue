<template>
  <div class="list-task-done">
    <h1 class="title">Tareas terminadas</h1>
    <ul>
      <li>
        <div class="task">
          <h3 class="subtitle">Tarea 1</h3>
          <div class="data">
            <p>Juan Pérez</p>
            <p>20/01/2025</p>
          </div>
        </div>
        <button class="botton-undone">Sin hacer</button>
      </li>
    </ul>
  </div>
  </template>

  <style scoped>
  .list-task-done {
    width: 40%;
    height: auto;
    background-color: rgb(108, 192, 153, 0.3);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    height: auto;
    width: 80%;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
    width: 100%;
    gap: 12px;
  }

  .task {
    width: 100%;

  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 24px;
    font-weight: bold;
    align-items: flex-start;
  }

  .data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5px;
    align-items: flex-start;
  }

  button {
    height: 50px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  @media (max-width: 480px) {
    .list-task-done {
      width: 90%;
      margin: 0 auto;
      padding: 16px;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .task {
      width: 100%;
    }

    .title {
      font-size: 28px;
      text-align: center;
    }

    .subtitle {
      font-size: 20px;
      text-align: center;
    }

    .data {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }

    button {
      width: 90%;
      height: 45px;
    }
  }
  </style>
