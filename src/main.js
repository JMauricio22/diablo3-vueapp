import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// BootstrapVue
import './plugins/bootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwsome'

// Custom Styles
import './assets/css/main.styl'

// Custom directives
import './directives'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
