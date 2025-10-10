import { API_ROUTES, client } from '@/api'
import type { Meditate, MeditateItem } from '@/interfaces/meditate.interface'
import type { Stat } from '@/interfaces/stat.interface'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMeditatesStore = defineStore('meditates', () => {
  const meditations = ref<MeditateItem[]>([])
  const lastFeeling = ref<Stat>()

  async function getMeditations() {
    const { data } = await client().get<Meditate>(API_ROUTES.meditations)

    meditations.value = data.data.meditations
  }

  async function saveFeeling(feelingName: string) {
    try {
      const { data } = await client().post<Stat>(API_ROUTES.stats, {
        type: `feeling_${feelingName}`,
        value: 1,
      })

      lastFeeling.value = data
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        //@ts-ignore
        lastFeeling.value = error.response
      }
    }
  }

  return { meditations, getMeditations, saveFeeling, lastFeeling }
})
