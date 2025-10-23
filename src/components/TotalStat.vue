<script setup lang="ts">
import { useMeditatesStore } from '@/stores/meditate.store'
import { onMounted } from 'vue'
import { checkStatBg, checkStatName } from '@/validators'

const meditateStore = useMeditatesStore()

onMounted(() => meditateStore.getTotalStat())
</script>

<template>
  <ul class="stat-list">
    <li
      class="stat-list-item"
      v-for="(value, key) in meditateStore.totalStat"
      :key="key"
      :style="{ backgroundImage: `url(${checkStatBg(key)})` }"
    >
      <span class="stat-name">{{ checkStatName(key) }}</span>
      <span class="stat-count">{{ value }}</span>
    </li>
  </ul>
</template>

<style scoped>
.stat-list {
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 50px;
}
.stat-list-item {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 8px 23px 30px 23px;
}

.stat-count {
  font-size: 80px;
  font-weight: 700;
  font-family: var(--font-family);
}

.stat-name {
  font-size: 18px;
  font-weight: 500;
  margin-top: auto;
  font-family: var(--font-family);
}
</style>
