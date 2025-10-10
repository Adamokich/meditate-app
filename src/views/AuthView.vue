<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue'
import InputString from '@/components/InputString.vue'
import LogoIcon from '@/icons/LogoIcon.vue'
import { useProfileStore } from '@/stores/profile.store'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const form = ref<{ username?: string; password?: string }>({})
const profileStore = useProfileStore()
const router = useRouter()

onMounted(() => {
  if (profileStore.getToken) {
    router.push({ name: 'main' })
  }
})

function login(e: Event) {
  e.preventDefault()

  if (form.value.username && form.value.password) {
    profileStore.authProfile(form.value.username, form.value.password)
  }

  watch(
    () => profileStore.getToken,
    () => {
      if (profileStore.getToken) {
        router.push({ name: 'main' })
      }
    },
  )

  form.value = {}
}
</script>

<template>
  <div class="auth">
    <LogoIcon class="greeting-icon" />
    <form class="auth-form" @submit="login">
      <InputString v-model="form.username" placeholder="Имя пользователя" />
      <InputString v-model="form.password" placeholder="Пароль" type="password" />
      <span v-if="profileStore.profile?.status === 'error'" class="alert">{{
        profileStore.profile.message
      }}</span>
      <ButtonMain>Войти в приложение</ButtonMain>
    </form>
    <RouterLink class="registration-link" to="/registration">Не зарегистрированы?</RouterLink>
  </div>
</template>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('../img/backround-img-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-bottom: 10px;
}

.registration-link {
  text-decoration: none;
  color: var(--color-light);
  font-weight: 400;
  font-size: 20px;
  transition: all 0.4s;
  width: 321px;
}

.registration-link:hover {
  opacity: 0.4;
}

.alert {
  font-size: 18px;
  color: red;
  width: 321px;
}
</style>
