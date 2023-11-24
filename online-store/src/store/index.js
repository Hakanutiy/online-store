import {createStore} from "vuex";
import ModalStore from "@/store/modalStore";
import basketStore from "@/store/basketStore";
import NotificationStore from "@/store/notificationStore";


export default createStore({
  modules:{
    modal: ModalStore,
    basket: basketStore,
    notification: NotificationStore
  }

})