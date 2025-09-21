<script setup lang="ts">
import IconPlay from '@/icons/IconPlay.vue'
import { useMeditatesStore } from '@/stores/meditate.store'
import { onMounted } from 'vue'

const store = useMeditatesStore()

onMounted(() => {
  store.getMeditations()
})
</script>

<template>
  <ul class="meditates-list">
    <li class="meditate-item" v-for="item in store.meditations">
      <div class="meditate-top">
        <h2 class="meditate-title">{{ item.title }}</h2>
        <div class="meditate-description">{{ item.description }}</div>
      </div>
      <div class="meditate-bottom">
        <button class="meditate-btn">
          Начать
          <IconPlay />
        </button>
        <div class="meditate-duration">{{ item.duration_min }} мин</div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.meditates-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 24px;
  column-gap: 22px;
}

.meditate-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 339px;
  height: 170px;
  background-color: var(--color-light);
  border-radius: var(--border-radius);
  color: var(--color-dark);
  padding: 22px 30px;
  font-size: 15px;
}

.meditate-top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meditate-title {
  font-weight: 500;
  font-size: 25px;
}

.meditate-description {
  font-family: var(--font-family);
}

.meditate-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.meditate-btn {
  font-weight: 500;
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 13px 17px;
  cursor: pointer;
  transition: all 0.5s;
}

.meditate-btn:hover {
  background-color: var(--color-primary-hover);
}

.meditate-duration {
  opacity: 0.75;
  color: var(--color-primary);
}
</style>
