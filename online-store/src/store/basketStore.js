// тут я решил создать корзину, чтобы не играться с пропсами. буду добавлять новые значения. в массив который будет подключен в корзине
import {useStore} from "vuex";

export default {
    state:() => ({
        basket: []
    }),
    mutations: {
        setAddBasket(state, product) {
            // проверочка есть ли такой товар в корзине или нет
            const existingProduct = state.basket.find(p => p._id === product._id);
            if (!existingProduct) {
                const item = {
                    ...product,
                    quantity: 1,
                    selectedColor: 'black'
                }
                state.basket.push(item)
            }
        },
        'basket/updateQuantity'(state, payload) {
            state.basket[payload.index].quantity = payload.quantity
        },
        'basket/setColor'(state, payload) {
            state.basket[payload.index].selectedColor = payload.color
        },
        'basket/removeItem'(state, index) {
            state.basket.splice(index, 1)
        }
    }
}