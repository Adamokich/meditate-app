import { API_ROUTES, client } from '@/api'
import type { Profile, RegisteredUser, User } from '@/interfaces/profile.interface'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const TOKEN_STORE_KEY = 'profile'
const initialValue = localStorage.getItem(TOKEN_STORE_KEY)

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>()
  const registeredUser = ref<RegisteredUser>()
  const authorizedUser = ref<User>()
  const token = ref<string>()

  if (initialValue) {
    token.value = initialValue
  }

  function setToken(newToken: string) {
    token.value = newToken
    localStorage.setItem(TOKEN_STORE_KEY, newToken)
  }

  function clearToken() {
    token.value = undefined
    localStorage.removeItem(TOKEN_STORE_KEY)
  }

  const getToken = computed(() => token.value)

  async function registrationProfile(email: string, username: string, password: string) {
    try {
      const { data } = await client().post<RegisteredUser>(API_ROUTES.profile.registration, {
        username,
        email,
        password,
      })

      registeredUser.value = data
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        //@ts-expect-error проверка получения объекта с ошибкой
        registeredUser.value = error.response.data
      }
    }
  }

  async function authProfile(username: string, password: string) {
    try {
      const { data } = await client().post<Profile>(API_ROUTES.profile.auth, {
        username,
        password,
      })

      profile.value = data
      setToken(data.data.token)
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'response' in error) {
        //@ts-expect-error проверка получения объекта с ошибкой
        profile.value = error.response.data
      }
    }
  }

  async function getProfile() {
    const { data } = await client().get<User>(API_ROUTES.profile.getProfile)

    authorizedUser.value = data
  }

  return {
    profile,
    registrationProfile,
    authProfile,
    setToken,
    getToken,
    clearToken,
    getProfile,
    authorizedUser,
    registeredUser,
  }
})
