<template>
  <h1 class="title">
    Livitt
  </h1>
</template>

<style scoped>
.title {
  display: none;
}

@media (max-width: 480px) {
  .title {
    position: fixed;
    bottom: auto;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    gap: 0px;
    padding: 0px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--rojopastel);
    color: white;
    font-size: 32px;
    margin-top: 0px;
    margin-bottom: 40px;
  }
}
</style>
