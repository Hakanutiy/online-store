<template>
<div class="navbar">
    <div class="logo">
  <router-link to="/">
    <LogoIcon></LogoIcon>
  </router-link>
   </div>
  <div class="title">Online-Store</div>
    <div class="navbar_link">
      <router-link class="link" to="/product">Главная</router-link>
      <router-link class="link" to="/basket">Корзина  <div class="basket_num" v-if="basket.length > 0" >{{basket.length}}</div></router-link>
      <router-link class="link" v-if="roles === 'ADMIN'" to="/admin">Admin Panel</router-link>
    </div>
</div>
</template>

<script setup>
import LogoIcon from "@/features/main/assets/logoIcon.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";
const store = useStore()
const basket = computed(() => store.state.basket.basket);
const token = localStorage.getItem("authToken")
const roles = localStorage.getItem("role")
</script>

<style scoped>
@import  './styles.module.scss';

</style>