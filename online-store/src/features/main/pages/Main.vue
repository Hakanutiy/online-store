<template>
 <NavBar></NavBar>
  <router-view ></router-view>
</template>

<script>
import NavBar from "@/features/main/pages/navbar/NavBar.vue";
import Product from "@/features/main/pages/products/Product.vue";

export default {
  name: "Main",
  components: {Product, NavBar}
}
</script>

<style scoped>

</style>