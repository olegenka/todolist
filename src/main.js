import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from "@/plugins/axios"
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)
Vue.use(VueAxios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
