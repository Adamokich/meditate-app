<script setup lang="ts"></script>

<template>
  <button class="timer-btn">
    <slot />
  </button>
</template>

<style scoped>
.timer-btn {
  border: none;
  width: 75px;
  height: 75px;
  background-color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
}
</style>
