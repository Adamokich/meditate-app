import { defineStore } from 'pinia'
import { useMeditatesStore } from './meditate.store'
import { computed, ref, watch } from 'vue'

const TIMER_KEY = 'timer'
const initialValue = localStorage.getItem(TIMER_KEY)

export const useTimerStore = defineStore('timer', () => {
  const meditateStore = useMeditatesStore()
  const timer = ref<number>(0)
  const initialTimer = ref<number>(0)
  const isRunning = ref<boolean>(false)

  let intervalId: ReturnType<typeof setInterval> | null = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(timer.value / 60)
    const seconds = String(timer.value % 60).padStart(2, '0')

    return `${minutes}:${seconds}`
  })

  function loadTimer(): void {
    if (initialValue) {
      timer.value = parseInt(initialValue)
    }
  }

  function startTimer(): void {
    if (intervalId) return

    isRunning.value = true

    intervalId = setInterval(() => {
      if (timer.value > 0) {
        timer.value--
      } else {
        stopTimer()
      }
    }, 1000)
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

  function exitFromTimer() {
    stopTimer()
    localStorage.removeItem(TIMER_KEY)
    meditateStore.removeTimerInfo()
  }

  watch(timer, (newValue: number) => {
    savedTimer(newValue)
  })

  watch(
    () => meditateStore.meditation,
    (meditation) => {
      if (meditation) {
        timer.value = meditation.duration_min * 60
        initialTimer.value = timer.value
        localStorage.setItem(TIMER_KEY, timer.value.toString())
      }
    },
    { immediate: true },
  )

  return {
    timer,
    loadTimer,
    startTimer,
    stopTimer,
    resetTimer,
    exitFromTimer,
    formattedTime,
    isRunning,
  }
})
