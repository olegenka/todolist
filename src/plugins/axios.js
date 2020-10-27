import ax from 'axios'

export const axios = ax.create({
    //TODO change this value to local mock service
    baseURL: "https://jsonplaceholder.typicode.com/"
})

export default {
    install (Vue) {
        Vue.prototype.$axios = axios
    }
}