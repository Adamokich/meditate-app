import { API_ROUTES, client } from '@/api'
import type { Meditate, MeditateItem } from '@/interfaces/meditate.interface'
import type { StatData, TotalStat, TotalStatItem } from '@/interfaces/stat.interface'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const DESCRIPTION_KEY = 'description'
const TITLE_KEY = 'title'

export const useMeditatesStore = defineStore('meditates', () => {
  const meditations = ref<MeditateItem[]>([])
  const lastFeeling = ref<StatData>()
  const meditation = ref<MeditateItem>()
  const totalStat = ref<TotalStatItem>()

  const title = ref<string>(localStorage.getItem(TITLE_KEY) || '')
  const description = ref<string>(localStorage.getItem(DESCRIPTION_KEY) || '')

  async function getMeditations() {
    const { data } = await client().get<Meditate>(API_ROUTES.meditations)

    meditations.value = data.data.meditations
  }

  async function saveFeeling(feelingName: string) {
    try {
      const { data } = await client().post<StatData>(API_ROUTES.stats, {
        type: `feeling_${feelingName}`,
        value: 1,
      })

      lastFeeling.value = data
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        //@ts-expect-error проверка получения объекта с ошибкой
        lastFeeling.value = error.response
      }
    }
  }

  async function getTotalStat() {
    try {
      const { data } = await client().get<TotalStat>(API_ROUTES.stats)
      totalStat.value = data.data.summary
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        //@ts-expect-error проверка получения объекта с ошибкой
        totalStat.value = error.response
      }
    }
  }

  async function saveDuration(value: number) {
    await client().post<StatData>(API_ROUTES.stats, {
      type: 'duration_min',
      value,
    })
  }

  function getMeditateById(id: number) {
    const newMeditation = meditations.value.find((item) => item.id === id)

    meditation.value = newMeditation

    if (meditation.value) {
      setTitle(meditation.value.title)
      setDescription(meditation.value.description)
    }
  }

  function setTitle(newTitle: string) {
    title.value = newTitle
    localStorage.setItem(TITLE_KEY, newTitle)
  }

  function setDescription(newDescription: string) {
    description.value = newDescription
    localStorage.setItem(DESCRIPTION_KEY, newDescription)
  }

  function removeTimerInfo() {
    localStorage.removeItem(TITLE_KEY)
    localStorage.removeItem(DESCRIPTION_KEY)
  }

  watch(
    () => meditation.value,
    (meditation) => {
      if (meditation) {
        setTitle(meditation.title)
        setDescription(meditation.description)
      }
    },
  )

  return {
    meditations,
    getMeditations,
    saveFeeling,
    lastFeeling,
    getMeditateById,
    meditation,
    title,
    description,
    removeTimerInfo,
    totalStat,
    getTotalStat,
    saveDuration,
  }
})
