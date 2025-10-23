import { defineStore } from 'pinia'
import { useMeditatesStore } from './meditate.store'
import { computed, ref, watch } from 'vue'

const TIMER_KEY = 'timer'
const TIMER_KEY_INITIAL = 'initial'
const initialTimerValue = localStorage.getItem(TIMER_KEY_INITIAL)

export const useTimerStore = defineStore('timer', () => {
  const meditateStore = useMeditatesStore()
  const timer = ref<number>(0)
  const initialTimer = ref<number>(initialTimerValue ? parseInt(initialTimerValue) : 0)
  const isRunning = ref<boolean>(false)

  let intervalId: ReturnType<typeof setInterval> | null = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(timer.value / 60)
    const seconds = String(timer.value % 60).padStart(2, '0')

    return `${minutes}:${seconds}`
  })

  function loadTimer(): void {
    const timerLS = localStorage.getItem(TIMER_KEY)
    const initialLS = localStorage.getItem(TIMER_KEY_INITIAL)

    timer.value = timerLS ? parseInt(timerLS) : initialLS ? parseInt(initialLS) : 0
  }

  function startTimer(): void {
    if (intervalId) return

    isRunning.value = true

    intervalId = setInterval(() => {
      if (timer.value > 0) {
        timer.value--
        savedTimer(timer.value)
      } else {
        stopTimer()
        meditateStore.saveDuration(initialTimer.value / 60)
      }
    }, 1000)
  }

  function startMeditation(): void {
    if (meditateStore.meditation) {
      timer.value = meditateStore.meditation.duration_min * 60
      initialTimer.value = timer.value
      savedInitialTimer(timer.value)
      savedTimer(timer.value)
    }
  }

  function stopTimer(): void {
    if (intervalId) {
      isRunning.value = false
      clearInterval(intervalId)
      intervalId = null
    }
  }

  function resetTimer() {
    stopTimer()
    timer.value = initialTimer.value
  }

  function savedTimer(value: number) {
    localStorage.setItem(TIMER_KEY, value.toString())
  }

  function savedInitialTimer(value: number) {
    localStorage.setItem(TIMER_KEY_INITIAL, value.toString())
  }

  function exitFromTimer() {
    localStorage.removeItem(TIMER_KEY)
    localStorage.removeItem(TIMER_KEY_INITIAL)
    meditateStore.removeTimerInfo()
  }

  watch(
    () => meditateStore.meditation,
    (meditation) => {
      if (meditation) {
        startMeditation()
      }
    },
    { immediate: true },
  )

  return {
    timer,
    loadTimer,
    startMeditation,
    startTimer,
    stopTimer,
    resetTimer,
    exitFromTimer,
    formattedTime,
    isRunning,
  }
})
