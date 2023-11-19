import {fetcher} from "@/lib/api";
import {useMutation} from "@tanstack/vue-query";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const login = (data) => {
    return fetcher('/auth/login', {method: 'post', data:data})
};

export const useAuthLogin = ({ config }) => {
    const store = useStore();
    const router = useRouter();

    return useMutation({
        ...config,
        mutationFn: (data) => login(data),
        onSuccess: (data) => {
            localStorage.setItem('authToken', data.token)
            localStorage.setItem('role', data.roles);
            router.push('/product');
        }




    });
};
