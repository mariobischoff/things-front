import Vue from 'vue'
import axios from 'axios'
import VueNativeSock from 'vue-native-websocket'

Vue.prototype.$axios = axios
Vue.use(VueNativeSock, 'ws://localhost:3000/client/5dc8218e61a6a9417c33a736')
