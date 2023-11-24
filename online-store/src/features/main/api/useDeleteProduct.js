import {fetcher} from "@/lib/api";
import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {getProductsQueryKey} from "@/features/main/api/useGetProducts";
import {useStore} from "vuex";

const Delete = (data) => {

    return fetcher(`/products/${data.id}`, {method: 'delete'})
}

export const useDeleteProduct = ({config}) => {
    const queryClient = useQueryClient();
    const store=  useStore()
    return useMutation({
        ...config,
        mutationFn: (data) => Delete(data),
        onSuccess:() => {
        queryClient.invalidateQueries(getProductsQueryKey)
            store.commit('addCreate', {
                title: 'Success',
                message: 'Товар успешно удален!',
                type:'success'
            })
        },
        onError: error => {
            store.commit('addCreate', {
                title: 'Success',
                message: error.message,
                type:'success'
            })
        }
    })
}