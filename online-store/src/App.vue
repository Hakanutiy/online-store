<script setup>
import {useAuthLogin} from "@/features/main/api/useAuthLogin";
import Notifications from "@/components/notification/Notifications.vue";


</script>

<template>
  <Notifications></Notifications>
<router-view></router-view>
</template>

<style>
body{
  margin: 0;
}
</style>
