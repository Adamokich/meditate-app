<script setup lang="ts">
import ButtonMain from '@/components/ButtonMain.vue'
import InputString from '@/components/InputString.vue'
import LogoIcon from '@/icons/LogoIcon.vue'
import { useProfileStore } from '@/stores/profile.store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const form = ref<{ email?: string; userName?: string; password?: string }>({})
const profileStore = useProfileStore()
const router = useRouter()

async function onSubmit(e: Event) {
  e.preventDefault()

  if (form.value.email && form.value.userName && form.value.password) {
    await profileStore.registrationProfile(
      form.value.email,
      form.value.userName,
      form.value.password,
    )

    console.log(profileStore.registeredUser)

    if (!profileStore.registeredUser) {
      return
    }

    if (profileStore.registeredUser.status === 'success') {
      form.value = {}
      router.push({ name: 'auth' })
    }
  }
}
</script>

<template>
  <div class="auth">
    <LogoIcon class="greeting-icon" />
    <form class="auth-form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Электронная почта" type="email" />
      <InputString v-model="form.userName" placeholder="Имя" />
      <InputString v-model="form.password" placeholder="Пароль" type="password" />
      <span v-if="profileStore.registeredUser?.status === 'error'" class="error">{{
        profileStore.registeredUser.message
      }}</span>
      <ButtonMain>Войти в приложение</ButtonMain>
    </form>
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
}

.error {
  font-size: 18px;
  color: red;
  width: 321px;
}
</style>
