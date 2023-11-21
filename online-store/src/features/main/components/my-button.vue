<template>
<button :class="[btnType, 'buttonProductAdd']"> <slot></slot></button>
</template>

<script setup>
const props = defineProps({ btnType: {type: String, required: true}})

</script>

<style scoped>
.buttonProductAdd{
  cursor: pointer;
  padding: 15px 10px 15px 10px;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  border-width: 0;
}
.buttonProductAdd:hover{
}

.add {
  background-color: #11850a;

}

.add:hover {
  background-color: #125b0d;

}

.info{
background-color: #0f6fa2 !important;
}

.info:hover{
  background-color: #15557c !important;
}

.delete{
  background-color: rgba(203, 39, 39, 0.8) !important;

}
.delete:hover{
  background-color: #5b0d0d !important;

}
</style>