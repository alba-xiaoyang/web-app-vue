<script></script>


<template>
  <div class="container-tasksAssignment">
    <input v-model="name" type="text" id="name" placeholder="Introduce tu nombre">
    <button @click="reset" class="reset">Reiniciar</button>
  </div>
</template>

<style scoped>
.container-tasksAssignment {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.25rem;
  padding: 1.25rem;
}

#name {
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
  height: 3.75rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border-radius: 0.25rem;
  background-color: var(--rojopastel);
  box-shadow: 0 0 0.625rem var(--rojopastel);
  font-family: Questrial, sans-serif;
  border: none;
  font-weight: bold;
  margin-left: 1.5%;
}

.link:hover,
button:hover {
  background-color: white;
  color: var(--rojopastel);
}
</style>
