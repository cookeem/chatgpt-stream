import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

if (process.env.VUE_APP_BASE_WS.indexOf('ws') === 0 || process.env.VUE_APP_BASE_WS.indexOf('wss') === 0) {
  Vue.prototype.BASE_WS = process.env.VUE_APP_BASE_WS
} else {
  var baseUrl = window.location.origin
  if (baseUrl.indexOf('https') === 0) {
    Vue.prototype.BASE_WS = baseUrl.replace('https', 'wss') + process.env.VUE_APP_BASE_WS
  } else if (baseUrl.indexOf('http') === 0) {
    Vue.prototype.BASE_WS = baseUrl.replace('http', 'ws') + process.env.VUE_APP_BASE_WS
  }
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
