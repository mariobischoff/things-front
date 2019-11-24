import { axiosInstance } from 'boot/axios'
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
      let response = await axiosInstance.post('/auth', credentials)
      SessionStorage.set('token', response.data.token)
      commit('setToken', response.data.token)
      commit('setEmail', response.data.email)
    } catch (error) {
      return commit('setError', error.response.data.msg)
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
      await axiosInstance.post('/user', payload)
      commit('setError', null)
    } catch (error) {
      commit('setError', error.response.data.msg)
    }
  },
  async loadThings ({ commit, state }) {
    try {
      let response = await axiosInstance.get('/thing', { headers: { authorization: state.token } })
      commit('setThings', response.data)
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
