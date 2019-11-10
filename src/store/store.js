import axios from 'axios'

const state = {
  user: {
    name: null,
    email: null
  },
  token: null,
  error: null
}

const getters = {
  getToken: (state) => {
    return state.token
  },
  getError: (state) => {
    return state.error
  }
}

const mutations = {
  setToken: (state, payload) => {
    state.token = payload
  },
  setError: (state, payload) => {
    state.error = payload
  }
}

const actions = {
  async login ({ commit }, credentials) {
    commit('setError', null)
    try {
      let response = await axios.post(process.env.API + '/auth', credentials)
      commit('setToken', response.data.token)
    } catch (error) {
      commit('setError', error.response.data.msg)
    }
  },
  async register ({ commit }, payload) {
    commit('setError', null)
    try {
      let response = await axios.post(process.env.API + '/user', payload)
      console.log(response)
      commit('setError', null)
    } catch (error) {
      commit('setError', error.response.data.msg)
    }
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
