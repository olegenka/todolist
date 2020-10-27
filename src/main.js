import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from "@/plugins/axios";
Vue.config.productionTip = false

Vue.use(VueAxios)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
