<script setup lang="ts">
import ButtonFeeling from './ButtonFeeling.vue'
</script>

<template>
  <div class="profile">
    <img class="profile-avatar" src="../img/avatar.png" alt="Аватар" />
    <div class="profile-info">
      <div class="profile-title">Добро пожаловать, Наталья!</div>
      <p class="profile-question">Как вы сегодня себя чувствуете?</p>
    </div>
    <div class="profile-feeling">
      <ButtonFeeling text="Спокойно" icon="calm" />
      <ButtonFeeling text="Расслабленно" icon="relax" />
      <ButtonFeeling text="Фокусированно" icon="focus" />
      <ButtonFeeling text="Тревожно" icon="alarming" />
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
}

.profile-info {
  margin-bottom: 9px;
}

.profile-title {
  font-size: 30px;
  font-weight: 500;
}

.profile-question {
  font-size: 22px;
  opacity: 0.7;
  font-family: var(--font-family);
}

.profile-feeling {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
</style>
