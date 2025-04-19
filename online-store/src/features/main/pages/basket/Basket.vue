<template>
  <div class="basket-container">
    <h1 class="basket-title">Корзина ({{ totalItems }})</h1>

    <div class="basket-list">
      <div class="basket-item" v-for="(item, index) in basket" :key="item._id">
        <div class="item-image">
          <img :src="'http://localhost:3000/'+item.image" alt="image product"/>
        </div>

        <div class="item-details">
          <div class="item-header">
            <h2 class="item-name">{{ item.name }}</h2>
            <button class="remove-btn" @click="removeFromBasket(index)">×</button>
          </div>

          <p class="item-category">{{ item.category }}</p>
          <p class="item-description">{{ item.description }}</p>

          <div class="color-selector">
            <span>Цвет:</span>
            <div
                v-for="color in colors"
                :key="color"
                class="color-option"
                :class="{
                'selected': item.selectedColor === color,
                [color]: true
              }"
                @click="setColor(index, color)"
            ></div>
          </div>

          <div class="quantity-controls">
            <button
                class="quantity-btn"
                :disabled="item.quantity === 1"
                @click="updateQuantity(index, -1)"
            >-</button>
            <span class="quantity">{{ item.quantity }}</span>
            <button
                class="quantity-btn"
                @click="updateQuantity(index, 1)"
            >+</button>
          </div>
        </div>

        <div class="item-pricing">
          <p class="price-total">
            {{ (item.price * item.quantity).toLocaleString('ru-RU') }} ₸
          </p>
          <p class="price-unit">
            {{ item.price.toLocaleString('ru-RU') }} ₸/шт
          </p>
        </div>
      </div>
    </div>

    <div class="summary">
      <div class="total-amount">
        Итого: {{ totalPrice.toLocaleString('ru-RU') }} ₸
      </div>
      <my-button btn-type="add" class="checkout-btn" @click="checkout">
        Оформить заказ
      </my-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import MyButton from "@/features/main/components/my-button.vue"

const store = useStore()
const colors = ['black', 'gray', 'white', 'pink', 'yellow', 'red']

const colorNames = {
  black: 'Черный',
  gray: 'Серый',
  white: 'Белый',
  pink: 'Розовый',
  yellow: 'Желтый',
  red: 'Красный'
}
function checkout() {
  const phoneNumber = '77088600257' // Замените на реальный номер
  const message = generateWhatsAppMessage()
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
}

function generateWhatsAppMessage() {
  const itemsText = basket.value.map((item, index) => {
    return `${index + 1}. ${item.name} (${colorNames[item.selectedColor]}) - ${
        item.quantity
    } шт. - ${(item.price * item.quantity).toLocaleString('ru-RU')} ₸`
  }).join('\n')

  return `*Новый заказ с сайта*\n\nТовары:\n${itemsText}\n\nИтого: ${totalPrice.value.toLocaleString('ru-RU')} ₸`
}

const basket = computed(() => {
  return store.state.basket.basket.map(item => ({
    ...item,
    selectedColor: item.selectedColor || 'black',
    quantity: item.quantity || 1
  }))
})

const totalItems = computed(() => {
  return basket.value.reduce((sum, item) => sum + item.quantity, 0)
})

const totalPrice = computed(() => {
  return basket.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

function updateQuantity(index, delta) {
  const newQuantity = basket.value[index].quantity + delta
  if (newQuantity > 0) {
    store.commit('basket/updateQuantity', { index, quantity: newQuantity })
  }
}

function setColor(index, color) {
  store.commit('basket/setColor', { index, color })
}

function removeFromBasket(index) {
  store.commit('basket/removeItem', index)
}
</script>

<style scoped>
@import "./styles.css";
</style>