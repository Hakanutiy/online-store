<template>
  <div class="productList">
    <div class="product" v-for="data in data" :key="data.id">
      <img class="imageProduct" :src="'http://localhost:5000/'+data.image" alt="image product"/>
      <div class="categoryProduct">{{data.category}}</div>
      <div class="nameProduct"> {{data.name}}</div>
      <div class="descriptionProduct"> {{data.description}}</div>
      <my-button :btn-type="'delete'" @click="onDeleteProduct(data._id)" class="buttonProductAdd">Удалить товар</my-button>


    </div>
  </div>

</template>

<script setup>
import MyButton from "@/features/main/components/my-button.vue";
import { useStore } from 'vuex'
import MainModal from "@/features/main/components/MainModal.vue";
import More from "@/features/main/components/More/More.vue";
import {ref} from 'vue'
import {useGetProducts} from "@/features/main/api/useGetProducts";
import {useDeleteProduct} from "@/features/main/api/useDeleteProduct";


const store = useStore()
const deleteProduct = useDeleteProduct({ config: {}})
const {  data } = useGetProducts({ config: {}})


const onDeleteProduct = (id) => {
  console.log(id)
  deleteProduct.mutate({id: id})
}




</script>

<style scoped>
.imageProduct{
  max-width: 350px;
  max-height: 350px;
  width: auto;
  height: auto;
  object-fit: cover;
  object-position: center center;
}

.product{
  max-width: 373px;
  padding: 20px;
  border: 1px solid #a4a4a4;
  border-radius: 12px;
  margin: 30px;
  display: flex;
  flex-direction: column;
}
.productList{
  position: absolute;
  top: 110px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.categoryProduct{
  font-size: 18px;
  color: gray;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nameProduct{
  font-size: 18px;
  font-weight: 700;
  color: #000000;
  display: flex;
  justify-content: center;
  margin-top: 10px;

}

.descriptionProduct{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.buttonProductAdd{
  cursor: pointer;
  padding: 15px 10px 15px 10px;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  border-width: 0;
  background-color: #11850a;
  margin-top: auto;
}
.buttonProductAdd:hover{
  background-color: #125b0d;

}

.buttonProductReview{
  cursor: pointer;
  padding: 15px 10px 15px 10px;
  margin-top: 10px;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  border-width: 0;
  background-color: #0f6fa2;

}
.buttonProductReview:hover{
  background-color: #15557c;

}
</style>