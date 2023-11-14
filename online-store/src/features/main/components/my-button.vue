<template>
<button class="buttonProductAdd"> <slot></slot></button>
</template>

<script setup>
const props = defineProps({ btnType: {type: String, required: true}})

console.log(props.btnType)
</script>

<style scoped>
.buttonProductAdd{
  cursor: pointer;
  padding: 15px 10px 15px 10px;
  font-size: 18px;
  color: white;
  border-radius: 12px;
  border-width: 0;
  background-color: #11850a;

}
.buttonProductAdd:hover{
  background-color: #125b0d;

}
</style>