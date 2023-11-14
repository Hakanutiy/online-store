<template>
  <div
      ref="modalWrapperRef"
      @click="onClickModalWrapper"
      role="button"
      onKeyDown="onEscape"
      tabIndex="0"
      class="modalWrapper">
    <div class="modalBody"><slot></slot></div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const emit = defineEmits(['closeModal'])
const modalWrapperRef = ref(null)

const hiddenOverflow = () => {
  modalWrapperRef.value.focus()
  document.body.style.overflow = 'hidden'
}
const onCloseModal = () => {
  emit('closeModal')
}

const onClickModalWrapper = (event) => {
  const domNodeBar = modalWrapperRef.value
  if (event.target === domNodeBar) {
    onCloseModal()
  }
}

onMounted(hiddenOverflow)
onUnmounted(() => document.documentElement.style.overflow = 'auto')
</script>

<style scoped>
.modalWrapper {

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    bottom: 0;
    z-index: 4444;
    background-color: rgba(56, 58, 70, 0.3);
}
.modalBody {
  background-color: #323448;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
}
</style>