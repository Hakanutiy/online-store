import {fetcher} from "@/lib/api";
import {useMutation} from "@tanstack/vue-query";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const createProducts = (data) => {
    return fetcher('/products',{method: 'post', data: data})
}

export const useCreateProducts = ({config}) =>{
    const router = useRouter();
    const store = useStore()
    return useMutation({
        ...config,
        mutationFn: (data)=> createProducts(data),
        onSuccess:() => {
            router.push('/product');
            store.commit('addCreate', {
                title: 'Success',
                message: 'Продукт успешно добавлен!',
                type:'success'
            })
        },
        onError: (error) => {
            store.commit('addCreate', {
                title: 'Error',
                message: error.message,
                type:'success'
            })
        }
    })
}