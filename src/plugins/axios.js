import ax from 'axios'

export const axios = ax.create({
    //TODO change this value to local mock service
    baseURL: "http://localhost:8000/"
})

export default {
    install (Vue) {
        Vue.prototype.$axios = axios
    }
}