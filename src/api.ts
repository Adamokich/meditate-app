import axios from 'axios'
import { useProfileStore } from './stores/profile.store'

export const API_ROUTES = {
  meditations: 'meditations',
  stats: 'stats',
  profile: {
    registration: 'auth/register',
    auth: 'auth/login',
    getProfile: 'profile',
  },
}

export function client() {
  const profileStore = useProfileStore()

  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${profileStore.getToken}`,
    },
  })
}
