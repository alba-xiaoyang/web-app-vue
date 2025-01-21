<script></script>


<template>
  <div class="container-tasksAssignment">
    <div>
      <input v-model="name" type="text" id="name" placeholder="Introduce tu nombre">
    </div>
    <div>
      <button @click="reset" class="reset">Reiniciar</button>
    </div>
    <div class="results-container">
      <button class="results-button" @click="toggleResults">
        {{ showResults ? "Ocultar resultados" : "Mostrar resultados" }}
      </button>

    </div>
  </div>
</template>

<style scoped>
.container-tasksAssignment {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.25rem;
  padding: 1.25rem;
  margin-right: 15%;
}

#name {
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  padding: 0.5rem;
  border: 0.125rem solid hsl(180deg 4% 24%);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.625rem hsl(180deg 4% 24%);
  font-family: Questrial, sans-serif;
  transition: all 0.3s ease;
}

#name:hover {
  border-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  background-color: #fefefe;
}

#name:focus {
  outline: none;
  border-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  background-color: #fff;
}

.reset {
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  font-family: Questrial, sans-serif;
}

.link:hover,
button:hover {
  background-color: white;
  color: var(--rojopastel);
}

button {
  width: 100%;
  height: 3.75rem;
  font-size: 1rem;
  font-family: Questrial, sans-serif;
  cursor: pointer;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.625rem var(--rojopastel);
}
</style>
