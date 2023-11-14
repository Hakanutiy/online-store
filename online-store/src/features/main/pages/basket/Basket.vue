<template>
  <div class="basketList">
    <div class="basket" v-for="item in basket" :key="item.id">
      <img class="imageBasket" :src="item.image" alt="image product"/>
      <div class="categoryBasket">{{ item.category }}</div>
      <div class="nameBasket">{{ item.name }}</div>
      <div class="descriptionBasket">{{ item.description }}</div>

      <div class="countList">
        <button @click="decrementCount(item)" class="countButton">-</button>
        <div class="count">{{ item.count }}</div>
        <button @click="incrementCount(item)" class="countButton">+</button>
      </div>
      <my-button>Купить</my-button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";
import MyButton from "@/features/main/components/my-button.vue";

const store = useStore();
const basket = store.state.basket.basket;


basket.forEach(item => {
  item.count = ref(1);
});

function incrementCount(item) {
  item.count++;
}

function decrementCount(item) {
  if (item.count > 1) {
    item.count--;
  }
}
</script>

<style scoped>
@import "./styles.css";
</style>
