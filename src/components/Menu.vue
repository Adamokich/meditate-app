<script setup lang="ts">
import ChartIcon from '@/icons/ChartIcon.vue'
import ExitIcon from '@/icons/ExitIcon.vue'
import PlayIcon from '@/icons/PlayIcon.vue'
import { useProfileStore } from '@/stores/profile.store'

const profileStore = useProfileStore()
</script>

<template>
  <main class="main">
    <nav class="menu">
      <img class="menu-logo" src="../img/logo.svg" alt="Логотип" />
      <ul class="menu-list">
        <li class="menu-item">
          <RouterLink active-class="active-link" class="menu-link" to="/meditates">
            <PlayIcon />
            Медитация
          </RouterLink>
        </li>
        <li class="menu-item">
          <RouterLink active-class="active-link" class="menu-link" to="/stat">
            <ChartIcon />
            Статистика
          </RouterLink>
        </li>
        <li class="menu-item">
          <a class="menu-link" href="#" @click="profileStore.clearToken">
            <ExitIcon />
            Выход
          </a>
        </li>
      </ul>
    </nav>
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 85px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 40px;
}

.menu-list {
  display: flex;
  align-items: flex-end;
  list-style: none;
  padding-left: 0;
}

.menu-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-item:not(:last-child) {
  padding-right: 55px;
}

.menu-item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  width: 3px;
  height: 92px;
  background-color: var(--color-bg-line);
}

.menu-item:nth-child(2) {
  padding-left: 55px;
}

.menu-item:last-child {
  padding-left: 55px;
}

.menu-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  color: var(--color-light);
  opacity: 0.5;
  font-size: 22px;
  text-decoration: none;
  font-family: var(--font-family);
  transition: all 0.3s;
}

.menu-link:hover {
  opacity: 1;
}

.active-link {
  opacity: 1;
}
</style>
