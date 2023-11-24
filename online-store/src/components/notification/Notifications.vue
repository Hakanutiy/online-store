<template>
  <div class='messages'>
    <Notification
        v-for="notification in toast.notifications"
        :key="notification.id"
        :type="notification.status"
        :message="notification.message"
        :id="notification.id"
    />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import Notification from '@/components/notification/Notification.vue';
import {reactive, ref, watchEffect} from "vue";

const store = useStore();
const toast = reactive({
  notifications: store.state.notification.notification,
});

watchEffect(() => {
  toast.notifications = store.state.notification.notification;
  console.log(toast.notifications[0]);
});


</script>

<style scoped>
.messages {
  position: fixed;
  top: 110px;
  right: 0;
  z-index: 50;

  width: 100%;
  height: auto;
}
</style>
