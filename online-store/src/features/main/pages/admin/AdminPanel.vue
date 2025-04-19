<template>
<div class="admin">
  <div class="adminContent">
    <div class="adminTitle">Список возможностей с продуктом</div>
    <div>
      <router-link class="link" to="/admin/create">Добавить товар</router-link>
      <router-link class="link" to="/admin/delete">Удалить товар</router-link>
    </div>
  </div>
  <div class="adminContent">
    <router-link class="link" to="/admin/analytics">Аналитика</router-link>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
@import "styles.scss";
</style>