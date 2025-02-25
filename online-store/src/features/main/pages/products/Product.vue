<template>
  <!-- Добавляем элементы фильтрации -->
  <div class="filters">
    <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск товаров..."
        class="search-input"
    />

    <select v-model="selectedCategory" class="category-select">
      <option value="">Все категории</option>
      <option v-for="category in uniqueCategories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>

  <div class="productList">
    <!-- Используем отфильтрованные данные -->
    <div class="product" v-for="item in filteredProducts" :key="item.id">
      <img class="imageProduct" :src="'http://localhost:3000/'+item.image" alt="image product"/>
      <div class="categoryProduct">{{ item.category }}</div>
      <div class="nameProduct"> {{ item.name }}</div>
      <div class="descriptionProduct"> {{ item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} ₸</div>
      <div class="descriptionProduct"> {{ item.description }}</div>
      <my-button :btn-type="'add'" @click="addBasketProduct(item)" class="buttonProductAdd">
        Добавить в Корзину
      </my-button>
      <my-button @click="onClickProduct(item._id)" class="buttonProductReview" btn-type="info">
        Просмотр
      </my-button>
    </div>
  </div>

  <MainModal modal-id="openProduct">
    <More :productId="selectedProductId"/>
  </MainModal>
</template>

<script setup>
import { computed, ref } from 'vue'
import MyButton from "@/features/main/components/my-button.vue";
import { useStore } from 'vuex'
import MainModal from "@/features/main/components/MainModal.vue";
import More from "@/features/main/components/More/More.vue";
import { useGetProducts } from "@/features/main/api/useGetProducts";

const store = useStore()
const selectedProductId = ref(null)
const { data } = useGetProducts({ config: {} })

// Реактивные переменные для фильтров
const searchQuery = ref('')
const selectedCategory = ref('')

// Получаем уникальные категории
const uniqueCategories = computed(() => {
  if (!data.value) return []
  return [...new Set(data.value.map(item => item.category))]
})

// Фильтрация продуктов
const filteredProducts = computed(() => {
  if (!data.value) return []

  return data.value.filter(item => {
    // Проверка категории
    const categoryMatch = selectedCategory.value
        ? item.category === selectedCategory.value
        : true

    // Проверка поискового запроса
    const searchMatch = searchQuery.value.toLowerCase()
        ? item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
        : true

    return categoryMatch && searchMatch
  })
})

function onClickProduct(id) {
  store.commit('setModalId', 'openProduct')
  selectedProductId.value = id
}

function addBasketProduct(data) {
  store.commit('setAddBasket', data)
}
</script>

<style scoped>
@import "./styles.module.scss.css";
</style>