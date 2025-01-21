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
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  margin-left: 300px;
}

.card-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 400px;
  border-radius: 12px;
  background-color: var(--azulclaropastel);
  padding-top: 50px;
  gap: 50px;
}

.profile-photo {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.card-body {
  width: 80%;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.save {
  background-color: var(--rojopastel);
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.save:hover {
  background-color: white;
  color: var(--rojopastel);
  border: 1px solid var(--rojopastel);
  transform: translateY(-2px);
}
</style>

