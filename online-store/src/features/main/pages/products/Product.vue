<template>
<div class="productList">
  <div class="product" v-for="data in data" :key="data.id">
    <img class="imageProduct" :src="'http://localhost:5000/'+data.image" alt="image product"/>
    <div class="categoryProduct">{{data.category}}</div>
    <div class="nameProduct"> {{data.name}}</div>
    <div class="descriptionProduct"> {{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}} ₸</div>
    <div class="descriptionProduct"> {{data.description}}</div>
    <my-button :btn-type="'add'" @click="addBasketProduct(data)" class="buttonProductAdd">Добавить в Корзину</my-button>
    <my-button @click="onClickProduct(data._id)" class="buttonProductReview" btn-type="info">Просмотр</my-button>


  </div>
</div>

  <MainModal modal-id="openProduct">
      <More :productId="selectedProductId"/>
  </MainModal>
</template>

<script setup>
import MyButton from "@/features/main/components/my-button.vue";
import { useStore } from 'vuex'
import {products} from "@/fakeJson/products";
import MainModal from "@/features/main/components/MainModal.vue";
import More from "@/features/main/components/More/More.vue";
import {ref} from 'vue'
import {useGetProducts} from "@/features/main/api/useGetProducts";


const store = useStore()
const selectedProductId = ref(null)
const {  data } = useGetProducts({ config: {}})

function onClickProduct (id){
  store.commit('setModalId', 'openProduct')
  selectedProductId.value = id
}
function addBasketProduct(data){
store.commit('setAddBasket', data)
}

</script>

<style scoped>
@import "./styles.module.scss.css";
</style>