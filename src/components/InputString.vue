<script setup lang="ts">
const data = defineModel<string>()
const { placeholder } = defineProps<{ placeholder: string }>()
</script>

<template>
  <input class="input-form" v-model="data" type="text" :placeholder="placeholder" />
</template>

<style scoped>
.input-form {
  width: 100%;
  max-width: 305px;
  padding: 10px;
  outline: none;
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: var(--color-light);
  border-bottom: 1px solid var(--color-light);
}

.input-form::placeholder {
  color: var(--color-input-placeholder);
  font-family: var(--font-family);
}
</style>
