import axios from "axios";

export class Request {
    constructor( baseUrl) {
        this.baseUrl = baseUrl;
    }

   async get(url){
        return await axios.get(this.baseUrl + url, {headers: {'withCredentials': true}});
    }

    async post(url, data){
        return await axios.post(this.baseUrl + url, data, {headers: {'withCredentials': true}});
    }
    async delete(url, data){
        return await axios.delete(this.baseUrl + url, data, {headers: {'withCredentials': true}});
    }
}

