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
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 300px;
}

.chat-body {
  background-color: var(--rosapastel);
  width: 100%;
  height: 520px;
}

.input-text {
  width: 100%;
  height: 50px;
  font-size: 32px;
  border: 0px;
  border-radius: 12px;
}
</style>
