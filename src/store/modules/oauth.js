import { getToken } from '@/api/ouath'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      getToken()
        .then(({ data }) => commit('SET_ACCESS_TOKEN', data.access_token))
        .catch(error => console.log('Error oAuth: ', error))
        .finally(() => console.log('Done'))
    }
  }
}
