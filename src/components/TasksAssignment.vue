<template>
  <div class="container-tasksAssignment">
    <div>
      <input v-model="name" type="text" id="name" placeholder="Introduce tu nombre">
    </div>
    <div>
      <button @click="reset" class="reset">Reiniciar</button>
    </div>
    <div>
      <li> </li>
    </div>
  </div>
</template>

<style scoped>
.container-tasksAssignment {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10%;
}

input #name {
  width: 100%;
  height: 100px;
  display: flex;
}


button .reset {
  width: 100%;
  height: 100px;

}
</style>
