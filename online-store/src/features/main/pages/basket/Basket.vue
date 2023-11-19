<template>
  <div class="basketList">
    <div class="basket" v-for="item in basket" :key="item._id">
      <img class="imageBasket" :src="'http://localhost:5000/'+item.image" alt="image product"/>
      <div class="categoryBasket">{{ item.category }}</div>
      <div class="nameBasket">{{ item.name }}</div>
      <div class="descriptionBasket">{{ item.description }}</div>

      <div class="countList">
        <button @click="decrementCount(item._id)" class="countButton">-</button>
        <div class="count">{{ countProducts[item._id] || '1'  }}</div>
        <button @click="incrementCount(item._id)" class="countButton">+</button>
      </div>
      <my-button>Купить</my-button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import {reactive, ref} from "vue";
import MyButton from "@/features/main/components/my-button.vue";
import logoIcon from "@/features/main/assets/logoIcon.vue";

const store = useStore();
const basket = store.state.basket.basket;

const countProducts = reactive({

})

console.log(countProducts)

function incrementCount(item) {

  console.log(countProducts[item])


  if(countProducts[item]){
    countProducts[item] ++
  }
  else{
    countProducts[item] = 1
  }
}

function decrementCount(item) {
  if(countProducts[item]){
    countProducts[item] --
  }
  else{
    countProducts[item] = 1
  }
}
</script>

<style scoped>
@import "./styles.css";
</style>
