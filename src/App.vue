<script setup lang="ts">
import Meditates from './components/Meditates.vue'
</script>

<template>
  <div class="app">
    <div class="left-panel"></div>

    <div class="right-panel">
      <nav class="nav"></nav>

      <ul class="meditate-list">
        <Meditates />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
