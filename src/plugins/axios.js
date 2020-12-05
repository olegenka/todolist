import ax from 'axios'

export const axios = ax.create({
    baseURL: process.env.VUE_APP_BACKEND_URL
})

export default {
    install(Vue) {
        Vue.prototype.$axios = axios
    }
}