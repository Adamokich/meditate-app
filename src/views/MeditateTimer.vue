<script setup lang="ts">
import ButtonTimerAction from '@/components/ButtonTimerAction.vue'
import BackSpaceIcon from '@/icons/BackSpaceIcon.vue'
import PauseTimerIcon from '@/icons/PauseTimerIcon.vue'
import PlayTimerIcon from '@/icons/PlayTimerIcon.vue'
import RepeatIcon from '@/icons/RepeatIcon.vue'
import { useMeditatesStore } from '@/stores/meditate.store'
import { useTimerStore } from '@/stores/timer.store'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const timerStore = useTimerStore()
const meditateStore = useMeditatesStore()
const router = useRouter()

function redirectToMain() {
  router.push({ name: 'main' })
  timerStore.exitFromTimer()
}

onMounted(() => {
  if (timerStore) {
    timerStore.loadTimer()
  }
})

onUnmounted(() => {
  if (timerStore) {
    timerStore.stopTimer()
  }
})
</script>

<template>
  <div class="meditate-timer">
    <div class="meditate-timer-visual">{{ timerStore.formattedTime }}</div>
    <div class="meditate-timer-info">
      <h2 class="meditate-timer-title">{{ meditateStore.title }}</h2>
      <p class="meditate-timer-descr">{{ meditateStore.description }}</p>
    </div>
    <div class="meditate-timer-actions">
      <BackSpaceIcon class="meditate-timer-action" @click="redirectToMain" />
      <ButtonTimerAction
        class="timer-btn"
        v-show="!timerStore.isRunning"
        @click="timerStore.startTimer"
      >
        <PlayTimerIcon />
      </ButtonTimerAction>
      <ButtonTimerAction
        class="timer-btn"
        v-show="timerStore.isRunning"
        @click="timerStore.stopTimer"
      >
        <PauseTimerIcon />
      </ButtonTimerAction>
      <RepeatIcon class="meditate-timer-action" @click="timerStore.resetTimer" />
    </div>
  </div>
</template>

<style scoped>
.meditate-timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 27px;
}

.meditate-timer-visual {
  width: 250px;
  height: 250px;
  background: url('../img/timer-bg-img.png') center center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family);
  font-size: 44px;
}

.meditate-timer-info {
  text-align: center;
}

.meditate-timer-title {
  font-size: 35px;
  font-weight: 500;
}

.meditate-timer-descr {
  opacity: 0.5;
  font-size: 25px;
  font-family: var(--font-family);
}

.meditate-timer-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 33px;
}

.meditate-timer-action,
.timer-btn {
  cursor: pointer;
  transition: all 0.3s;
}

.meditate-timer-action:hover {
  transform: scale(1.5);
}

.timer-btn:hover {
  transform: scale(0.9);
}
</style>
