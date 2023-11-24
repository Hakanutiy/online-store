import {fetcher} from "@/lib/api";
import {useMutation} from "@tanstack/vue-query";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const register = (data) => {
    return fetcher('/auth/registration', {method: 'post', data: data});
}

export const useAuthRegister = ({ config }) => {
    const store=  useStore()
    const router = useRouter();

    return useMutation({
        ...config,
        mutationFn: (data) => register(data),
        onSuccess: (data) => {
            console.log(data)
            if (data.error === undefined){
                store.commit('addCreate', {
                    title: 'Success',
                    message: 'Успешная регистрация!',
                    type:'success'
                })
                router.push('/auth/login');

            }
           else{
                store.commit('addCreate', {
                    title: 'Error',
                    message: "Этот пользователь уже существует!",
                    type: 'error'
                })
            }
        },
        onError:(error) => {

            store.commit('addCreate', {
                title: 'Error',
                message: error.message,
                type: 'error'
            })
        }
    })
}