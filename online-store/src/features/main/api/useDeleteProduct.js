import {fetcher} from "@/lib/api";
import {useMutation, useQueryClient} from "@tanstack/vue-query";
import {getProductsQueryKey} from "@/features/main/api/useGetProducts";

const Delete = (data) => {

    return fetcher(`/products/${data.id}`, {method: 'delete'})
}

export const useDeleteProduct = ({config}) => {
    const queryClient = useQueryClient();

    return useMutation({
        ...config,
        mutationFn: (data) => Delete(data),
        onSuccess:() => {
        queryClient.invalidateQueries(getProductsQueryKey)
        }
    })
}