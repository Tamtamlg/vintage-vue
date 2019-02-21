import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VeeValidate from 'vee-validate'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  offset: 0
})
Vue.use(VeeValidate, {
  classes: true
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBabTGFkIMI8WPNMy5aGjNghns28nODAqo',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
