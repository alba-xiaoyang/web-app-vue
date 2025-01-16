<template>
  <div class="container">
    <div class="card-profile">
      <div class="card-header">
        <div class="profile-photo">
          <img src="/src/components/images/burbuja-de-dialogo (1).png" alt="Foto fr perfil de {{ usuario }}">
        </div>
      </div>
      <div class="card-body">
        <div class="name-profile">
          <h3>Nombre</h3>
          <p>Juan Pérez</p>
        </div>
        <div class="age-profile">
          <h3>Edad</h3>
          <p>25</p>
        </div>
        <div class="houses-profile">
          <h3>Dirección</h3>
          <p>Calle, número, piso y letra</p>
        </div>
      </div>
      <div class="card-footer">
        <button class="save">Guardar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

.card-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 400px;
  border: 2px solid black;
  border-radius: 12px;
  background-color: var(--azulclaropastel);
  padding-top: 50px;
  gap: 50px;
}

.card-header {
  border: 2px solid black;
}

.card-body {
  border: 2px solid black;
  width: 80%;
}

.card-footer {
  border: 2px solid black;
}
</style>

