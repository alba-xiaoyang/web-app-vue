<script setup>

</script>

<template>
  <div class="chat-group">
    <div class="chat-body"></div>
    <div class="message-input">
      <input type="text" placeholder="Escribe algo" class="input-text">
    </div>
  </div>
</template>

<style scoped>
.chat-group {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 250px;
  padding: 24px;
}

.chat-body {
  background-color: var(--rosapastel);
  width: 100%;
  height: 500px;
}

.input-text {
  width: 100%;
  height: 40px;
  font-size: 32px;
  border: 0px;
  background-color: var(--amarillopastel);
}

@media (max-width: 480px) {
  .chat-group {
    margin: 0;
    padding: 12px;
    padding-bottom: 70px;
  }
}
</style>
