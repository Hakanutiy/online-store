import {fetcher} from "@/lib/api";
import {useQuery} from '@tanstack/vue-query'
const getProducts = () => {
    return fetcher('/products', {method: 'get'})
}

export const getProductsQueryKey = 'products'
export const useGetProducts = ({ config }) => {

    return useQuery({
        ...config,
        queryKey: [getProductsQueryKey ],
        queryFn: () => getProducts(),
    })
}