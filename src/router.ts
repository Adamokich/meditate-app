import { createRouter, createWebHistory } from 'vue-router'
import { useProfileStore } from './stores/profile.store'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'preview',
      component: () => import('./views/GreetingView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/AuthView.vue'),
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('./views/RegistrationView.vue'),
    },
    {
      path: '/main',
      component: () => import('./components/Menu.vue'),
      children: [
        {
          path: '/meditates',
          name: 'main',
          component: () => import('./components/Meditates.vue'),
        },
        {
          path: '/stat',
          name: 'stat',
          component: () => import('./components/Stat.vue'),
        },
      ],
    },
  ],
})

const publicPages = ['auth', 'registration', 'preview']

router.beforeEach((to) => {
  const profileStore = useProfileStore()

  if (!profileStore.getToken && !publicPages.includes(to.name as string)) {
    return { name: 'auth' }
  }
})
