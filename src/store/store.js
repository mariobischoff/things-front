import axios from 'axios'
import { SessionStorage } from 'quasar'

const state = {
  user: {
    email: null
  },
  things: [],
  token: null,
  error: null
}

const getters = {
  getToken: (state) => {
    return state.token
  },
  getError: (state) => {
    return state.error
  },
  getThings: (state) => {
    return state.things
  },
  getEmail: (state) => {
    return state.user.email
  }
}

const mutations = {
  setEmail: (state, payload) => {
    state.user.email = payload
  },
  setThings: (state, payload) => {
    state.things = payload
  },
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
      commit('setEmail', response.data.email)
      SessionStorage.set('token', response.data.token)
    } catch (error) {
      return commit('setError', error)
    }
  },
  logout ({ commit }) {
    SessionStorage.remove('token')
    commit('setError', null)
    commit('setToken', null)
    commit('setEmail', null)
  },
  async register ({ commit }, payload) {
    commit('setError', null)
    try {
      await axios.post(process.env.API + '/user', payload)
      commit('setError', null)
    } catch (error) {
      commit('setError', error.response.data.msg)
    }
  },
  async loadThings ({ commit, state }) {
    let response = await axios.get(process.env.API + '/thing')
    commit('setThings', response.data)
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
