import Vue from 'vue'
import axios from 'axios'
import { SessionStorage } from 'quasar'

axios.interceptors.request.use((config) => {
  const token = SessionStorage.getItem('token')
  if (token != null) {
    config.headers.authorization = token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axios
