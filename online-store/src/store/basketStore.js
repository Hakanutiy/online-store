// тут я решил создать корзину, чтобы не играться с пропсами. буду добавлять новые значения. в массив который будет подключен в корзине
export default {
    state:() => ({
        basket: []
    }),
    mutations: {
        setAddBasket(state, product) {
            // проверочка есть ли такой товар в корзине или нет
            const existingProduct = state.basket.find(p => p._id === product._id);

            if (!existingProduct) {
               return  state.basket = [...state.basket, product];
            }
        },
        setRemoveBasket(state) {
            return state.basket = []
        },
        setRemoveProduct(state, product) {
            // тут я сделал фильтрацию, чтобы оставил все объекты, кроме того, который совпадает с продукт.
            return state.basket = state.basket.filter(id => id._id !== product._id);
        }
    }
}