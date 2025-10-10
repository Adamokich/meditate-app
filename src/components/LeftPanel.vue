<script setup lang="ts">
import { useProfileStore } from '@/stores/profile.store'
import ButtonFeeling from './ButtonFeeling.vue'
import { onMounted, ref } from 'vue'
import type { ButtonData } from '@/interfaces/buttonData.interface'
import { useMeditatesStore } from '@/stores/meditate.store'

const profileStore = useProfileStore()
const meditatesStore = useMeditatesStore()
const selectedFeeling = ref('')
const buttonsData: ButtonData[] = [
  {
    text: 'Спокойно',
    icon: 'calm',
    feeling: 'calm',
  },
  {
    text: 'Расслабленно',
    icon: 'relax',
    feeling: 'relax',
  },
  {
    text: 'Фокусированно',
    icon: 'focus',
    feeling: 'focus',
  },
  {
    text: 'Тревожно',
    icon: 'anxiety',
    feeling: 'anxiety',
  },
]

onMounted(() => {
  profileStore.getProfile()
})

function selectFeeling(feeling: string) {
  selectedFeeling.value = feeling
}
</script>

<template>
  <div class="profile">
    <div class="profile-info">
      <div class="profile-title">
        Добро пожаловать, {{ profileStore.authorizedUser?.data.user.username }}!
      </div>
      <p class="profile-question">Как вы сегодня себя чувствуете?</p>
    </div>
    <div class="profile-feeling">
      <ButtonFeeling
        v-for="item in buttonsData"
        v-bind="item"
        @select="selectFeeling"
        @click="meditatesStore.saveFeeling(item.feeling)"
        :selectedFeeling="selectedFeeling"
      />
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
