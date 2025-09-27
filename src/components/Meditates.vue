<script setup lang="ts">
import LeftPanel from './LeftPanel.vue'
import RightPanel from './RightPanel.vue'
</script>

<template>
  <div class="meditates">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<style scoped>
.meditates {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
