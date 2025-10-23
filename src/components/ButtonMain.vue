<script setup lang="ts"></script>

<template>
  <button class="button-main">
    <slot />
  </button>
</template>

<style scoped>
.button-main {
  cursor: pointer;
  background-color: var(--color-input-bg);
  width: 100%;
  max-width: 321px;
  padding-block: 16px;
  border: none;
  border-radius: 10px;
  color: var(--color-light);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 25px;
  transition: all 0.3s;
}

.button-main:hover {
  background-color: var(--color-primary-hover);
}
</style>
