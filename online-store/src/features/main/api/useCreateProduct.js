import {fetcher} from "@/lib/api";
import {useMutation} from "@tanstack/vue-query";

const createProducts = (data) => {
    return fetcher('/products',{method: 'post', data: data})
}

export const useCreateProducts = ({config}) =>{
    return useMutation({
        ...config,
        mutationFn: (data)=> createProducts(data)
    })
}