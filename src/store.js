import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://httpbin.org/post',
    endRequest: true,
    loading: false
  },
  mutations: {
    request (state, payload) {
      state.endRequest = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    setLoading ({
      commit
    }, payload) {
      commit('setLoading', payload)
    },

    async fetchData ({
      commit,
      state
    }, payload) {
      commit('setLoading', true)
      try {
        commit('request', false)
        await axios.post(state.api, payload)
          .then(response => {
            if (response.data && response.data.form) {
              console.log(response.data.form)
            } else {
              console.log(response)
            }
          }).catch((error) => {
            console.log(error.message)
          })
        commit('setLoading', false)
        commit('request', true)
      } catch (error) {
        commit('setLoading', false)
        console.log(error.message)
      }
    }
  }
})
