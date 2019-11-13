import Vue from 'vue'
import axios from 'axios'
import VueNativeSock from 'vue-native-websocket'

Vue.prototype.$axios = axios
Vue.use(VueNativeSock, 'ws://localhost:3000/client/432432432432432', {
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5000,
  reconnectionDelay: 300
})
