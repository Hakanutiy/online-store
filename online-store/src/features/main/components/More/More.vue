<template>
  <div class="more-container" v-if="currentProduct">
    <div class="main-content">
      <img class="image-more" :src="'http://localhost:3000/'+currentProduct.image" alt="image product"/>

      <div class="product-info">
        <div class="category-tag">{{ currentProduct.category }}</div>
        <h1 class="product-title">{{ currentProduct.name }}</h1>
        <p class="product-description">{{ currentProduct.description }}</p>

        <div class="price-section">
          <span class="price">{{ formattedPrice(currentProduct.price) }} ₸</span>
          <div class="color-selector">
            <span>Цвет:</span>
            <div
                v-for="color in colors"
                :key="color"
                class="color-option"
                :class="{
                'selected': selectedColor === color,
                [color]: true
              }"
                @click="selectedColor = color"
            ></div>
          </div>
        </div>

        <my-button
            btn-type="add"
            class="add-to-cart-btn"
            @click="addToCart"
        >
          Добавить в Корзину
        </my-button>
      </div>
    </div>

    <div class="similar-products" v-if="similarProducts.length > 0">
      <h2 class="section-title">Похожие товары</h2>
      <div class="similar-grid">
        <div
            class="similar-card"
            v-for="product in similarProducts"
            :key="product._id"
            @click="$emit('select-product', product._id)"
        >
          <img
              :src="'http://localhost:3000/'+product.image"
              alt="similar product"
              class="similar-image"
          />
          <div class="similar-info">
            <h3 class="similar-name">{{ product.name }}</h3>
            <span class="similar-price">{{ formattedPrice(product.price) }} ₸</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import MyButton from "@/features/main/components/my-button.vue"
import {useGetProducts} from "@/features/main/api/useGetProducts";

const props = defineProps({
  productId: { type: String, required: true }
})

const emit = defineEmits(['select-product'])

const { data } = useGetProducts({ config: {} })
const store = useStore()
const colors = ['black', 'gray', 'white', 'pink', 'yellow', 'red']
const selectedColor = ref('black')

// Находим текущий продукт
const currentProduct = computed(() =>
    data.value?.find(p => p._id === props.productId)
)

// Похожие продукты (той же категории, исключая текущий)
const similarProducts = computed(() => {
  if(!currentProduct.value || !data.value) return []
  return data.value
      .filter(p =>
          p.category === currentProduct.value.category &&
          p._id !== currentProduct.value._id
      )
      .slice(0, 4)
})

// Форматирование цены
const formattedPrice = (price) =>
    Number(price).toLocaleString('ru-RU')

// Добавление в корзину
const addToCart = () => {
  if(!currentProduct.value) return

  const productWithColor = {
    ...currentProduct.value,
    selectedColor: selectedColor.value,
    quantity: 1
  }

  store.commit('basket/addToBasket', productWithColor)
}
</script>

<style scoped>
@import "styles.module.scss.css";
</style>