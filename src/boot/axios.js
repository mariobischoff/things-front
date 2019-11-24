import Vue from 'vue'
import axios from 'axios'
import { SessionStorage } from 'quasar'

const axiosInstance = axios.create({
  baseURL: process.env.API
})

axiosInstance.interceptors.request.use((config) => {
  const token = SessionStorage.getItem('token')
  if (token) {
    config.headers.authorization = token
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
