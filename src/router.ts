import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./components/Meditates.vue'),
    },
    {
      path: '/stat',
      component: () => import('./components/Stat.vue'),
    },
  ],
})
