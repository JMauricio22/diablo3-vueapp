import Vue from 'vue'
import Vuex from 'vuex'
import oauth from './modules/oauth'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    error
  }
})
