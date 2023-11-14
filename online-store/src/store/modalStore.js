export default  {
    state: () => ({
        currentModalId: null
    }),
    getters: {

    },
    mutations: {
        setModalId(state, modalId){
            return state.currentModalId = modalId;
        },
        clearModalId(state){
            return state.currentModalId = null;
        }
    },
    actions: {

    },
}