<template>
  <div class="container">
    <form class="login" @submit.prevent="handleSubmit">
      <h2>Register</h2>
      <label for="username">Username:</label>
      <input type="text" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" v-model="password" required>

      <button type="submit">Login</button>
      <div class="linkContent">
        <div class="linkTitle">Есть аккаунт?</div>
        <router-link to="/auth" class="linkRegister">Авторизируйся!</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useAuthRegister} from "@/features/main/api/useAuthRegister";

const register = useAuthRegister({config: {}})

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  register.mutate({username: username.value, password: password.value})
}
</script>

<style scoped>
@import "styles.css";
</style>