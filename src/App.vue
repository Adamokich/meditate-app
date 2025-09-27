<script setup lang="ts">
import Meditates from './components/Meditates.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="app">
    <Menu />
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  padding: 40px 50px;
  max-width: 1280px;
  margin-inline: auto;
}
</style>
