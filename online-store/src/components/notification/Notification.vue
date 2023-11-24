<template>
  <div :key="id" class="custom-toast" role="alert">
    <div class="custom-toast-content">
      <div class="custom-toast-icon">
          <div v-if="type === 'success'"><SuccessIcon/></div>
           <div v-else><ErrorIcon/></div>
      </div>
      <div class="custom-toast-text">
        <p class="custom-toast-message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useStore} from "vuex";
import ErrorIcon from "@/features/main/assets/ErrorIcon.vue";
import SuccessIcon from "@/features/main/assets/SuccessIcon.vue";

const timeoutId = ref(null);
const store = useStore()

const { id, message, type } = defineProps(["id", "message", "type" ]);

console.log(type)
console.log('123123')
const setupTimeout = () => {
  timeoutId.value = setTimeout(() => {
   store.commit('destroyNotification', id)
  }, 3000);
};

onMounted(() => {
  setupTimeout();
});

onBeforeUnmount(() => {
  clearTimeout(timeoutId.value);
});
</script>

<style scoped>
@import "notification.scss";
</style>