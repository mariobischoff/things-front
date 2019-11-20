<template>
  <q-page class="flex flex-center">
    <q-btn
      @click="clickButton()"
    >
      Ok
    </q-btn>
    <q-list> </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {

    }
  },
  sockets: {
    connect: () => {
      console.log('socket connected')
    }
  },
  methods: {
    clickButton () {
      this.$socket.emit('setConfig', { pump: true })
    }
  },
  beforeMount () {
    this.$options.sockets.onmessage = (data) => console.log(data)
  }
}
</script>
