<template>
  <div v-for="product in data" :key="product._id">
    <div v-if="product && product._id === props.productId" class="more">
      <img class="imageMore" :src="'http://localhost:3000/'+product.image" alt="image product"/>
      <div class="categoryMore">{{ product.category }}</div>
      <div class="nameMore">{{ product.name }}</div>
      <div class="descriptionMore">{{ product.description }}</div>
      <button class="buttonMoreAdd">Добавить в Корзину</button>
    </div>
  </div>
</template>


<script setup>
import { ref, defineProps } from 'vue';
import { products } from '@/fakeJson/products';
import {useGetProducts} from "@/features/main/api/useGetProducts";
const {  data } = useGetProducts({ config: {}})

const props = defineProps({
  productId: { type: String, required: true }
});
</script>

<style scoped>
@import "styles.module.scss.css";
</style>
