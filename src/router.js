import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/newVersion',
            component: () => import('./views/MainView.vue')
        }
    ]
})
