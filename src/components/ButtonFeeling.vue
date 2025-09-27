<script setup lang="ts">
import AlarmingIcon from '@/icons/AlarmingIcon.vue'
import CalmIcon from '@/icons/CalmIcon.vue'
import FocusIcon from '@/icons/FocusIcon.vue'
import RelaxIcon from '@/icons/RelaxIcon.vue'

type ButtonData = {
  text: string
  icon: 'calm' | 'focus' | 'relax' | 'alarming'
}

const { text, icon } = defineProps<ButtonData>()
</script>

<template>
  <div class="feeling-wrapper">
    <button class="feeling-btn">
      <CalmIcon v-if="icon === 'calm'" />
      <RelaxIcon v-if="icon === 'relax'" />
      <FocusIcon v-if="icon === 'focus'" />
      <AlarmingIcon class="alarm-icon" v-if="icon === 'alarming'" />
    </button>
    <p class="feeling-text">{{ text }}</p>
  </div>
</template>

<style scoped>
.feeling-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.feeling-text {
  font-size: 12px;
  font-family: var(--font-family);
}

.feeling-btn {
  display: flex;
  padding: 15px 13px;
  background-color: var(--color-light);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s;
}

.feeling-btn:hover {
  background-color: var(--color-primary-inverted);
}

.feeling-btn svg {
  width: 35px;
  height: 35px;
}
</style>
