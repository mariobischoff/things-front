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
      console.log('dasdas')
      this.$socket.emit('setConfig', { id: 'dasdasdsa', config: { pump: true } })
    }
  },
  beforeMount () {
    this.$options.sockets.onmessage = (data) => console.log(data)
  }
}
</script>
