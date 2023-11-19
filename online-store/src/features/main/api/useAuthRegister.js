import {fetcher} from "@/lib/api";
import {useMutation} from "@tanstack/vue-query";

const register = (data) => {
    return fetcher('/auth/register', {method: 'post', data: data});
}

export const useAuthRegister = ({ config }) => {

    return useMutation({
        ...config,
        mutationFn: (data) => register(data),
    })
}