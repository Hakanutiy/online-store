import {createStore} from "vuex";
import ModalStore from "@/store/modalStore";
import basketStore from "@/store/basketStore";

export default createStore({
  modules:{
    modal: ModalStore,
    basket: basketStore,
  }

})