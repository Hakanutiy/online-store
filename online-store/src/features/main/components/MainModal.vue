<template>

  <Teleport  to="body">
    <Modal v-if="modalId === store.state.modal.currentModalId" @closeModal="onCloseModal"  v-bind="$props" >
      <slot>

      </slot>
    </Modal>
      <div v-else>XYZ</div>
    {{store.state.modal.currentModalId}}
  </Teleport>
</template>

<script setup>
import {Teleport} from "vue";
import {useStore} from "vuex";
import Modal from "@/features/main/components/Modal.vue";
const props =  defineProps ({modalId: {type: String, required: true}})
const store = useStore()




const onCloseModal = () => {
  store.commit('clearModalId')

}
</script>

<style scoped>

</style>