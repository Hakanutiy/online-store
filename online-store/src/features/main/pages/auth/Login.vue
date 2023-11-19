<template>
  <div class="container">
    <form class="login" @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" v-model="username" required>

      <label for="password">Password:</label>
      <input type="password" v-model="password" required>

      <button type="submit">Login</button>
      <div class="linkContent">
        <div class="linkTitle">Нету аккаунта?</div>
        <router-link to="/auth/register" class="linkRegister">Зарегистрируйтесь!</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import {useAuthLogin} from "@/features/main/api/useAuthLogin";
import {ref} from "vue";
import {useRouter} from "vue-router";

const login = useAuthLogin({config:{}})
const router =  useRouter();

const username = ref('')
const password = ref('')
const handleSubmit = () => {
  login.mutate({username: username.value, password: password.value})

}

</script>

<style scoped>
@import "styles.css";
</style>