import { Request } from "./request"
import {mapSearchParams} from "./map-search-params.js";


 const request = new Request("https://six-experience-production.up.railway.app/")

export async function fetcher(
    url,
    config
) {
    try {
        const _url = url + (config?.params ? `?${mapSearchParams(config.params)}` : '')

        const { data } = await request[config?.method](_url,  config?.data)
        return data
    } catch (error) {

        throw error
    }
}
