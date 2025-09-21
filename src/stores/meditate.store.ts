import { API_ROUTES, http } from '@/api'
import type { Meditate, MeditateItem } from '@/interfaces/meditate.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditatesStore = defineStore('meditates', () => {
  const meditations = ref<MeditateItem[]>([])

  async function getMeditations() {
    const { data } = await http.get<Meditate>(API_ROUTES.meditations)

    meditations.value = data.data.meditations
  }

  return { meditations, getMeditations }
})
