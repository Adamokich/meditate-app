<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue'
import LogoIcon from '@/icons/LogoIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="greeting">
    <div class="greeting-wrapper">
      <LogoIcon class="greeting-icon" />
      <h1 class="greeting-title">Добро пожаловать!</h1>
      <p class="greeting-descr">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    </div>
    <ButtonMain @click="router.push({ name: 'auth' })">Войти в приложение</ButtonMain>
  </div>
</template>

<style scoped>
.greeting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100%;
  min-height: 100vh;
  background-image: url('../img/backround-img-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.greeting-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.greeting-title {
  font-size: 34px;
  font-weight: 700;
}

.greeting-descr {
  font-size: 20px;
  font-weight: 500;
  font-family: var(--font-family);
  max-width: 317px;
  text-align: center;
}
</style>
