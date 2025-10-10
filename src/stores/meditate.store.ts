import { API_ROUTES, client } from '@/api'
import type { Meditate, MeditateItem } from '@/interfaces/meditate.interface'
import type { Stat } from '@/interfaces/stat.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditatesStore = defineStore('meditates', () => {
  const meditations = ref<MeditateItem[]>([])

  async function getMeditations() {
    const { data } = await client().get<Meditate>(API_ROUTES.meditations)

    meditations.value = data.data.meditations
  }

  async function saveFeeling(feelingName: string) {
    const { data } = await client().post<Stat>(API_ROUTES.stats, {
      type: `feeling_${feelingName}`,
      value: 1,
    })
  }

  return { meditations, getMeditations, saveFeeling }
})
